import React, { useState } from 'react';
import './Login.css';
function Login(props){
   const [username,setUsername] = useState("");
   const [password,setPassword] = useState("");
   
 return(
              <>
               <h2> Loggin your account </h2>
                  <div className="input">
                     <input className="inputTag" id="LoginUser" value={username} onChange={
                        (event)=>{ setUsername(event.target.value);
                        console.log(username);}
                     } type="text" placeholder="Enter your username"></input><br></br>
                  </div>
                  <div className="input">
                     <input className="inputTag" id="LoginPassword" value={password} onChange={
                        (event)=>{ setPassword(event.target.value);
                           console.log(password);}
                     }
                      type="password" placeholder="Enter your password"></input>
                  </div>
                  <div className="message">
                     <p>If you are new user</p>
                     <p>Create your Account!!!</p>
                  </div>
                  <button className="button"  onClick={()=>{props.loginHandler(username,password)}} type="button" >Login</button>
                  
            </>
        )
   }

export default Login;