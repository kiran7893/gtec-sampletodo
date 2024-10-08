const TaskModel = require('../models/TaskModel');


const todoController = {
  getTodos: (req, res) => {
    Todo.getAllTodos((err, todos) => {
      if (err) res.status(500).send(err);
      res.json(todos);
    });
  },
  getTodoById: (req, res) => {
    const id = req.params.id;
    Todo.getTodoById(id, (err, todo) => {
      if (err) res.status(500).send(err);
      res.json(todo);
    });
  },
  createTodo: (req, res) => {
    const newTodo = {
      title: req.body.title,
      completed: req.body.completed || false
    };
    Todo.addTodo(newTodo, (err, id) => {
      if (err) res.status(500).send(err);
      res.status(201).json({ id, ...newTodo });
    });
  },
  updateTodo: (req, res) => {
    const id = req.params.id;
    const updatedTodo = {
      title: req.body.title,
      completed: req.body.completed
    };
    Todo.updateTodo(id, updatedTodo, (err, result) => {
      if (err) res.status(500).send(err);
      res.json({ id, ...updatedTodo });
    });
  },
  deleteTodo: (req, res) => {
    const id = req.params.id;
    Todo.deleteTodo(id, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(204).send();
    });
  }
};

module.exports = todoController;
