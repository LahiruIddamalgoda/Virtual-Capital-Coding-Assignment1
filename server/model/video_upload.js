const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User_e = require('./usermodel')

const video_upload = new Schema({
    video_name:String,
    video_type:String,
    user_id : [{type : Schema.Types.ObjectId, ref : User_e}]

});

var video = mongoose.model('video', video_upload);
module.exports = video;
