
const db = require('../db/Db');



const Todo = {
  getAllTodos: (callback) => {
    const query = 'SELECT * FROM todos';
    db.query(query, (err, results) => {
      if (err) throw err;
      callback(null, results);
    });
  },
  getTodoById: (id, callback) => {
    const query = 'SELECT * FROM todos WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) throw err;
      callback(null, results[0]);
    });
  },
  addTodo: (newTodo, callback) => {
    const query = 'INSERT INTO todos (title, completed) VALUES (?, ?)';
    db.query(query, [newTodo.title, newTodo.completed], (err, result) => {
      if (err) throw err;
      callback(null, result.insertId);
    });
  },
  updateTodo: (id, updatedTodo, callback) => {
    const query = 'UPDATE todos SET title = ?, completed = ? WHERE id = ?';
    db.query(query, [updatedTodo.title, updatedTodo.completed, id], (err, result) => {
      if (err) throw err;
      callback(null, result);
    });
  },
  deleteTodo: (id, callback) => {
    const query = 'DELETE FROM todos WHERE id = ?';
    db.query(query, [id], (err, result) => {
      if (err) throw err;
      callback(null, result);
    });
  }
};

module.exports = Todo;
