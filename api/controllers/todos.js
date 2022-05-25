const getAllTodos = async (req, res) => {
   const todos = await Todo.find();

   res.json(todos);
};

const createTodo = (req, res) => {
   const todo = new Todo({
      text: req.body.text,
   });
   todo.save();
   res.json(todo);
};

const deleteTodo = async (req, res) => {
   const todo = await Todo.findByIdAndDelete(req.params.id);

   res.json(todo);
};

const updateTodo = async (req, res) => {
   const todo = await Todo.findById(req.params.id);

   todo.complete = !todo.complete;

   todo.save();

   res.json(todo);
};

module.exports = {
   getAllTodos,
   createTodo,
   deleteTodo,
   updateTodo,
};
