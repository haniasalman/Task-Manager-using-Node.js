const express = require('express');
const router = express.Router();
const {
  getAlltasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/task');

router.route('/').get(getAlltasks);
router.route('/').post(createTask);
// router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
