// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');
  const db = client.db('Todoapp')

  // db.collection('Todos').insertOne({
  //     text: 'Something to do',
  //     completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Hendrik',
  //   age: 22,
  //   location: 'Tallinn'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to enter user', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // })
  client.close();
});
