const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Todo = require('./models/Todo');

app.use(express.json()); //allows to use content type app json inside file
app.use(cors()); // Protect from cross-origin errors

// Connect to DB
mongoose
   .connect(
      'mongodb+srv://derekrpbu:Safari%4007-@cluster0.jf90a.mongodb.net/MERN-Database?retryWrites=true&w=majority',
      {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      }
   )
   .then(() => console.log('Connected to DB'))
   .catch(console.error);

// Middleware - routes
app.use('/todos', todos);

// Start Server
app.listen(3001, () => console.log('Server started on port 3001'));
