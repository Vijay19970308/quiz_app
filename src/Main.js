import React , {useState} from 'react';
import { Link, Route, BrowserRouter,Switch } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Start from './Start';
import './Main.css';
function Main(){
  const [color, changeColor] = useState("#00FFFF");
  const [color1, changeColor1] = useState("#e50914");
  const [error,setError]=useState(undefined);
  const [Signin,setSignIn]=useState(false);
  const [userName,setUsername]=useState("");
  const loginHandler = async (username,password)=>{
   try{ 
    setUsername(username);
    await fetch("http://localhost:9000/LogIn",{
       method:"POST",
       headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
     },
     body:JSON.stringify({
      username:username,
      password:password,
   })
    }).then((r)=>{
       if(r.ok){
         return{ success:true};
       }
       else{
          return r.json();
       }
    })
    .then((r)=>{
       if(r.success===true){
          setSignIn(true);
       }
       else{
          setError(r.message);
          setUsername("");
       }
    });
   }catch(e){
      setError(e.message);
      setUsername("");
   }
}
  const signUpHandler = async (username,password,phone)=>{
   try{
      setUsername(username);
    await fetch("http://localhost:9000/SignIn",{
       method:"POST",
       headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
       },
       body:JSON.stringify({
          username:username,
          password:password,
          cell:phone,
       })
    }).then((r)=>{
       if(r.ok){
         return{ success:true};
       }
       else{
          return r.json();
       }
    })
    .then((r)=>{
       if(r.success===true){
          setSignIn(true);
       }
       else{
          setError(r.message);
          setUsername("");
       }
 
    });
 }catch(e)
 {
   setError(e.message);
   setUsername("");
 }
}
if(Signin)
{
  return <Start username={userName}/>;
}
else
{
 return(
   <>
     <div className="main">
       <div className="sign">
        <div className="signup">
            <BrowserRouter>
            <nav className="nav" >
                <div className="list">
                    <Link style={{ background: color }} className="link" onClick={() => {changeColor("#e50914"); changeColor1("#00FFFF")}} to="/SignUp" >Create new account</Link>
                    <Link style={{ background: color1 }} className="link" onClick={() => {changeColor1("#e50914"); changeColor("#00FFFF")}} to="/Login" >Login acount</Link>
                </div>
            </nav>
            <div className="Body">
                <Switch>
                  <Route exact path="/SignUp"><SignUp signUpHandler={signUpHandler} error={error}/></Route>
                  <Route  path="/"><Login loginHandler={loginHandler} error={error} /></Route>
                  <Route  path="/Login"><Login loginHandler={loginHandler} error={error} /></Route>
                </Switch>
                <h5 className="error">{error}</h5>
            </div>
            </BrowserRouter>
            </div>
            </div>
          </div>
          </>
        )
}
}

export default Main;