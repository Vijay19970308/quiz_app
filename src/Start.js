import React , {useState} from 'react';
import { Link, Route, BrowserRouter,Switch } from 'react-router-dom';
import './Start.css';
import NewQuiz from './NewQuiz';
import Reports from './Reports';
import Profile from './Profile';
function Start(){
  const [color, changeColor] = useState("#e50914");
  const [color1, changeColor1] = useState("#00FFFF");
  const [color2, changeColor2] = useState("#00FFFF");
 return(
           <div id="MainPage">
               <BrowserRouter>
                <nav id="nav" >
                    <ul id="list">
                        <li id="list-item"  style={{ background: color }} ><Link id="link" onClick={() => {changeColor("#e50914"); changeColor2("#00FFFF");changeColor1("#00FFFF")}} to="/Start" >Start a Quiz</Link></li>
                        <li id="list-item" style={{ background: color1 }} ><Link id="link" onClick={() => {changeColor1("#e50914"); changeColor2("#00FFFF"); changeColor("#00FFFF")}} to="/Reports" >Reports</Link></li>
                        <li id="list-item" style={{ background: color2 }} ><Link id="link" onClick={() => {changeColor2("#e50914"); changeColor("#00FFFF"); changeColor1("#00FFFF")}} to="/Profile" >Profile</Link></li>
                        <li id="list-item" >LogOut</li>
                    </ul>
              </nav>
                <Switch>
                <Route exact path="/"><NewQuiz/></Route>
                  <Route exact path="/Start"><NewQuiz/></Route>
                  <Route  path="/Reports"><Reports/></Route>
                  <Route  path="/Profile"><Profile/></Route>
                </Switch>
              </BrowserRouter>
           </div>
        )
}
export default Start;