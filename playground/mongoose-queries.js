const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b7d47e89806e1e0099ada6211';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

 User.findById('5b7c287b524b986800c0bcf7').then((user) => {
   if (!user) {
     return console.log('Unable to find user');
   }

   console.log(JSON.stringify(user, undefined, 2));
 }, (e) => {
   console.log(e);
 });
