// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');
  const db = client.db('Todoapp')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b7aaede8f4774ef31f47696")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });


  // db.collection('Users').findOneAndUpdate({name:'Karina'}, {
  //   $set: {
  //     name: 'Hendrik'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result => {
  //   console.log(result);
  // }));

  db.collection('Users').findOneAndUpdate({age: 22}, {
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result => {
    console.log(result);
  }));
});
