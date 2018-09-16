const mongoose = require('mongoose');

//defining a model
var ToDoModel = mongoose.model('Todo',
    {
    TodoName : {
        type : String,
        required : true,
        minlength : 3,
        trim : true
     }
     ,    
    
        Completed :
             {type : Boolean}
    ,
     
        CompletedAt:
             { type : Number}   
    }
);

module.exports = {
    ToDoModel
}