import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Get all bugs
export const fetchBugs = () => API.get('/bugs');

// Create a new bug
export const createBug = (data) => API.post('/bugs', data);

// Update a bug
export const updateBug = (id, data) => API.put(`/bugs/${id}`, data);

// Delete a bug
export const deleteBug = (id) => API.delete(`/bugs/${id}`);

// Update BugStatus
export const updateBugStatus = (id, status) =>
  axios.patch(`${BASE_URL}/bugs/${id}`, { status });
