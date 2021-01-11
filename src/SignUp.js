import React, { useState} from 'react';
import './Login.css';

export default function SignUp(props){
   const [username,setUsername] = useState("");
   const [password,setPassword] = useState("");
   const [phone,setPhone]=useState("");
   const [Error,setError]=useState("");
   const [Disable,setDisable]=useState(false);

 return(
         <>
               <h2>Create your account</h2>
                  <div className="input">
                     <input id="Username" value={username} className="inputTag" type="text" onChange={(event)=>{setUsername(event.target.value)}} placeholder="Choose your username"></input><br></br>
                  </div>
                  <div className="input">
                     <input id="password" value={password} className="inputTag" type="password" onChange={(event)=>{setPassword(event.target.value)}} placeholder="Choose your password"></input>
                  </div>
                  <div className="input">
                     <input id="repassword" className="inputTag" type="password" onChange={(event)=>{
                        if(event.target.value!==password){
                           setError("Password do not matched!!");
                        }
                        else{
                           setError("");
                        }
                        if(Error!=="")
                          setDisable(false);
                        else
                          setDisable(true);
                        }} placeholder="Re-Enter your password"></input>
                  </div>
                  <div className="input">
                  <input value={phone} onChange={(event)=>{setPhone(event.target.value)}} id="SignButton" className="inputTag" type="number" min="1000000000" max="9999999999" placeholder="Enter your Phone Number"></input>
                  </div>
                  <p id="error">{Error}</p>
                  <button id="SignButton"  disabled={Disable} className="button" onClick={()=>{props.signUpHandler(username,password,phone)}} type="button" >Create Account</button>
                  
            </>
        )
                     }
 