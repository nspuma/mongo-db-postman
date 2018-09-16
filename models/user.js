const  mongoose = require ('mongoose');
var userModel = mongoose.model('UserModel',
{
    username : {
        type : String,
        required : true
    },
    email : 
    {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    }
});

module.exports = {
    userModel  
}