const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create database connection
const db = mysql.createConnection({
  host:process.env.DB_HOST,
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD ,
  database:process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

// API routes
// Get all todos
app.get('/todos', (req, res) => {
  const sql = 'SELECT * FROM todos';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Add a new todo
app.post('/todos', (req, res) => {
  const sql = 'INSERT INTO todos (task) VALUES (?)';
  const task = req.body.task;
  db.query(sql, [task], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const sql = 'DELETE FROM todos WHERE id = ?';
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
