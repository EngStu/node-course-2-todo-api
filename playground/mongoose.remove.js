const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => { 
//   console.log(result);
// })

Todo.findByIdAndRemove('5c20ee9def616fe28b8df26e').then((todo) => {
  console.log(todo);
})