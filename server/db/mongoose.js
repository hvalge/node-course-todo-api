var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://hvalge:egh0cooN@host:port/dbname' || 'mongodb://localhost:27017/TodoApp')

module.exports = {mongoose};
