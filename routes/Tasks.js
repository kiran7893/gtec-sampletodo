// backend/routes/tasks.js
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
router.get('/todos', TaskController.getTodos);
router.get('/todos/:id', TaskController.getTodoById);
router.post('/todos', TaskController.createTodo);
router.put('/todos/:id', TaskController.updateTodo);
router.delete('/todos/:id', TaskController.deleteTodo);

module.exports = router;
