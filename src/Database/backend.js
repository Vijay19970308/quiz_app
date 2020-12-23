//Libraries

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Models
//const {QuestionModel} = require('./Model/QuestionModel.js');
const {Data} = require('./Data');
const port = 9000;

//MiddleWare
app.use(express.json);
app.use(bodyParser.urlencoded({extended:false}));

//Endpoints
app.get('/abc', (req,res)=>{
  try
  {
    console.log("Hello!!");
    res.sendStatus(200).send( {});
  }
  catch(error)
  {
    res.sendStatus(404).send(error.message);
  }
})

app.get('/LogIn',async (req,res)=>{
    try
    {
      res.send(await Data.findOne({username:req.query.username,
                                   password:req.query.password}));
    }
    catch(error)
    {
      res.sendStatus(404).send(error.message);
    }
})

app.post('/signIn', async(req,res)=>{
    const { username, password, Phone} = req.body;
    let user ={};
    user.username = username;
    user.password = password;
    user.Phone = Number(Phone);
    const newModel = new userModel(user);
    try{
        await newModel.save();
        res.send(newModel);
    }catch(e)
    {
        console.log(e.message);
    }
})
app.listen(port, () => console.log(`App listening on port ${port}!`));
module.exports = app; 