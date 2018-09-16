//to include mongoose
 const mongoose = require('mongoose');
//no need to add a callback and mention that 
//client connection expicnitly as mongoose ll take care

const Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
 mongoose   
}

