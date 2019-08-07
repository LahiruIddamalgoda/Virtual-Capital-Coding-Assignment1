const mongoose = require('mongoose');
const Schema = mongoose.Schema;



 let userschema = new Schema({
    firts_name: {
        type: String
    },
    last_name: {
        type: String
    },
    user_email: {
        type: String
    },
    
});

 var User_e = mongoose.model('user', userschema);

 module.exports = User_e;

 
