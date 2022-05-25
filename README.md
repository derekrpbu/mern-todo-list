Reference: https://www.youtube.com/watch?v=R81g-2r6ynM



Create api directory

Use  npm init -y



---

## API

---



Install dependencies: express, mongoose and cors

Dev-dependency: nodemon (npm i -D nodemon)



Start Server

```javascript
app.listen(3001, () => console.log('Server started on port 3001'));
```



Connect to MongoDB

```javascript
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
```



**Create Model**

How your DB structure should be created.

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
   text: {
      type: String,
      required: true,
   },
   complete: {
      type: Boolean,
      default: false,
   },
   timestamp: {
      type: String,
      default: Date.now(),
   },
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
```





**Endpoint**: 

- Endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. 
- For APIs, an endpoint can include a URL of a server or service. Each endpoint is the location from which APIs can access the resources they need to carry out their function.



//Notes:

- Need to handle errors in request (sending wrong param)
- Not finding resource





---

## UI

---

Use npx create-react-app client



Files we delete: App.css, App.test.js, logo, reportWebVitals.js, setupTests.js





Create function that will call API handle that will check if task is complete

completeTodo() activate onClick





---

## What to learn for React

---

CSS:

- Flex
- Positioning
- Units

JS:

- Scope
- Inmediate effect functions
- Scoping
- Objects
- Map, Find, Filter, Destructuring
- Modules Import/Exports
- Promises
- JS Classes

React Beginners:

- JSX (what you can do with it)
- State (Best ways to use it)
- Components
- Props
- Hooks (useState, useEffect)
- Lifecycle Methods

React Advanced:

- Data Handling 
- State Management (Context API)
- Redux
- Routing
- Next.js
- Remix



---

## What to Learn for Node.js

---









