var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://hvalge:egh0cooN@host:port/dbname')

module.exports = {mongoose};
