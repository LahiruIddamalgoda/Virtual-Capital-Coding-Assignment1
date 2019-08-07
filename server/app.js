const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')


const app = express();

// Middeleware
app.use(cors());
app.use(bodyParser.json());


// Connect to the db
mongoose.connect('mongodb://localhost:27017/userDB244',{ useNewUrlParser: true});
const connecation  = mongoose.connection;

connecation.once('open', function(){
    console.log('Mongodb connection ')
}) 


// Router
app.use('/Users',require('./routes/user'));


/** assigning port number . */
const port = 3030;
app.listen(3030, function () {
    console.log("Express server listening on port 3000");
    })