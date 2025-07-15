const Bug = require('../models/Bug.js');

// GET /api/bugs
const getAllBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    next(err);
  }
};

// POST /api/bugs
const createBug = async (req, res, next) => {
  try {
    const bug = new Bug(req.body);
    const savedBug = await bug.save();
    res.status(201).json(savedBug);
  } catch (err) {
    next(err);
  }
};

// PUT /api/bugs/:id
const updateBug = async (req, res, next) => {
  try {
    const updated = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/bugs/:id
const deleteBug = async (req, res, next) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.status(204).send(); 
  } catch (err) {
    next(err);
  }
};


// PATCH /api/bugs/:id
const updateBugStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const bug = await Bug.findByIdAndUpdate(id, { status }, { new: true });
    if (!bug) return res.status(404).json({ error: 'Bug not found' });

    res.json(bug);
  } catch (err) {
    res.status(400).json({ error: 'Invalid update operation' });
  }
};

module.exports ={ getAllBugs, createBug, updateBug, deleteBug, updateBugStatus };