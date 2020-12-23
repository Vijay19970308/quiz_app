//Libarries...
const mongoose = require('mongoose');

//Schema creation for user
const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    Phone:Number
})

//export for using it in other files
exports.userSchema = userSchema;