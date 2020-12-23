const port = process.env.Port || 3999;

//DB connection
const connectDB = require('./connect');

//Models
const QuestionModel = require('./models/QuestionModel');
const user = require('./models/userModel');

//Libraries
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//MiddleWare
app.use(urlencodedParser);
app.use(express.json);
connectDB();

app.post('/saveUser', async(req,res)=>{
    const { username, password, Phone} = req.body;
    let userModel ={};
    user.username = username;
    user.password = password;
    user.Phone = Number(Phone);
    const newModel = new user(userModel);
    try{
        await newModel.save();
        res.send(newModel);
    }catch(e)
    {
        console.log(e.message);
    }
})
app.listen(port, () => console.log(`App listening on port ${port}!`));