const request = require('supertest');
const app = require('../server.js');
const Bug = require('../models/Bug.js');
require('./setup');
jest.setTimeout(30000);

describe('Bug API', () => {
  it('should create a new bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'Test Bug' });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Bug');
    expect(res.body.status).toBe('open');
  });

  it('should fetch all bugs', async () => {
    await Bug.create({ title: 'Sample Bug' });

    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it('should update a bug', async () => {
    const bug = await Bug.create({ title: 'To Update' });

    const res = await request(app)
      .put(`/api/bugs/${bug._id}`)
      .send({ status: 'resolved' });

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('resolved');
  });

  it('should delete a bug', async () => {
    const bug = await Bug.create({ title: 'To Delete' });

    const res = await request(app).delete(`/api/bugs/${bug._id}`);

    expect(res.statusCode).toBe(204);
  });

  it('should update a bug status', async () => {
    const bug = await Bug.create({ title: 'To Update' });

    const res = await request(app)
      .patch(`/api/bugs/${bug._id}`)
      .send({ status: 'resolved' });

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('resolved');
  });
});
