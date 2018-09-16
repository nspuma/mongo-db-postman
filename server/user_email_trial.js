const userModel = require('../models/user').userModel;
const  mongoose = require ('mongoose');
const Promise = global.Promise;

// mongoose.connect('mongodb://localhost:27017/TodoApp');


//const  Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/User');

var user1 = new userModel({
    username: "uma1",
    email : "  uma1@gmail.com "
});

user1.save().then( 
(res) => 
    {
        console.log(JSON.stringify(res,undefined,2));
    },
 (e) => {
    console.log(e);
}
);