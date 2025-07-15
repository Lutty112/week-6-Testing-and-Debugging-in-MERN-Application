const express = require ('express');
const { getAllBugs, createBug, updateBug, deleteBug, updateBugStatus } = require ('../controllers/bugController.js');

const router = express.Router();

router.get('/', getAllBugs);
router.post('/', createBug);
router.put('/:id', updateBug);
router.delete('/:id', deleteBug);
router.patch('/:id', updateBugStatus);

module.exports = router; 
