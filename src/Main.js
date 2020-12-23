import React , {useState} from 'react';
import { Link, Route, BrowserRouter,Switch } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import './Main.css';
function Main(){
  const [color, changeColor] = useState("#00FFFF");
  const [color1, changeColor1] = useState("#e50914");
 return(
   <>
     <div id="main">
        <div id="signup">
            <BrowserRouter>
            <nav id="nav" >
                <ul id="list">
                    <li id="list-item"  style={{ background: color }} ><Link id="link" onClick={() => {changeColor("#e50914"); changeColor1("#00FFFF")}} to="/SignUp" >Create new account</Link></li>
                    <li id="list-item" style={{ background: color1 }} ><Link id="link"  onClick={() => {changeColor1("#e50914"); changeColor("#00FFFF")}} to="/Login" >Login acount</Link></li>
                </ul>
            </nav>
                <Switch>
                  <Route exact path="/SignUp"><SignUp/></Route>
                  <Route  path="/"><Login/></Route>
                  <Route  path="/Login"><Login/></Route>
                </Switch>
              </BrowserRouter>
            </div>
          </div>
          </>
        )
}

export default Main;