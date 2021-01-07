const mongoose = require('mongoose');

const {userSchema} = require('./UserSchema');

const uri ='mongodb+srv://Mydbuser:Vijay@1234@cluster0.jooug.mongodb.net/QuizDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    }); 
let userModel = mongoose.model('UserData',userSchema);

exports.userModel = userModel; 