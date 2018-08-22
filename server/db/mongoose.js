var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user:pass@host:port/dbname' || 'mongodb://localhost:27017/TodoApp')

module.exports = {mongoose};
