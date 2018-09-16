const mongoose = require('../db/mongoose.js').mongoose;
const ToDoModel = require('../models/todo').ToDoModel;
const express = require('express');
const body_parser = require('body-parser');

// // 
// steps:
// 1) use express 
// 2) use body-parser to parse the json body
// 3) using app of express, open n listen the prot
// 4) app.post is used to post the data from postman to db

var app = express();

//return of this body-parser.json func 
//is what we woudl wanna give to middleware
//to usually add any middleware, we use app.use
//body_parser would attache  our json as object in the request
app.use(body_parser.json()); 

app.listen(8080, () => {
    console.log('app listening at 8080');

});

//to post todos ,we give POST wiht this path /todos

//to getwe use GET with /todos/<todoname>

app.post('/todos', (req,res)=>{
    console.log(req.body);
    //create a todo based on tat todo constructor
    //this would just create an instance ..wont save to db

    var newpostmanTodo  = new ToDoModel(
        {
            TodoName  : req.body.TodoName
         }
     );

    newpostmanTodo.save().then( (doc) => 
    {
        console.log(JSON.stringify(doc,undefined,2));    
        res.send(doc);
    },
    (e) => 
    {
        console.log(JSON.stringify(e,undefined,2));
        res.status(400).send(e);
    });
});
    
//create a todo based on tat todo constructor
//this would just create an instance ..wont save to db
//     var firstTodo1 = new ToDoModel(
//         {
//            TodoName: 'fix this, Uma!', 
//            Completed: true,
//            CompletedAt : 18380
//        });

//        //to save it to mongodb
// //save would return a promise
// firstTodo1.save().then( (doc)=> 
//     {
//         console.log(doc);
//     },
//      (err) => {
//          console.log(err);
//      }
//      );

module.exports = 
{
    app
}




