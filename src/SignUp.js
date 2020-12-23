import React from 'react';
import './Login.css';
function SignUp(){
 return(
         <>
               <h2>Create Your account</h2>
                  <div id="input">
                     <input id="inputTag" type="text" placeholder="Choose your username"></input><br></br>
                  </div>
                  <div id="input">
                     <input id="inputTag" type="password" placeholder="Choose your password"></input>
                  </div>
                  <div id="input">
                     <input id="inputTag" type="password" placeholder="Re-Enter your password"></input>
                  </div>
                  <div id="input">
                  <h3 style={{ display:"inline" ,color:'cyan'}}>+91</h3> <input id="inputTag" type="phone" placeholder="Enter your Phone Number"></input>
                  </div>
                  <button id="button" type="button" >Create Account</button>
                  
            </>
        )
}

export default SignUp;