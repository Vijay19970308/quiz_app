import React, { useState } from 'react';
import './Login.css';
function Login(){
   const [username,setUsername] = useState("");
   const [password,setPassword] = useState("");
 return(
              <>
               <h2>Login</h2>
                  <div id="input">
                     <input id="inputTag" onChange={
                        (event)=>{ setUsername(event.target.value);
                        console.log(username);}
                     } type="text" placeholder="Enter your username"></input><br></br>
                  </div>
                  <div id="input">
                     <input id="inputTag" onChange={
                        (event)=>{ setPassword(event.target.value);
                           console.log(password);}
                     }
                      type="password" placeholder="Enter your password"></input>
                  </div>
                  <button id="button" onClick={
                     ()=>{ }        
            
                  } type="button" >Login</button>
                  
            </>
        )
}

export default Login;