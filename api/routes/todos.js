const express = require('express');
const router = express.Router();
const {
   getAllTodos,
   createTodo,
   deleteTodo,
   updateTodo,
} = require('../controllers/todos');

// GET Todos
router.route('/').get(getAllTodos);

// POST Todo
router.route('/new').post(createTodo);

// DELETE Todo
router.route('/delete/:id').delete(deleteTodo);

// UPDATE Todo
router.route('/complete/:id').get(updateTodo);

modules.exports = router;
