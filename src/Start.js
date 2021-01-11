import React , {useState} from 'react';
import { Link, Route, BrowserRouter,Switch } from 'react-router-dom';
import './Start.css';
import NewQuiz from './NewQuiz';
import Reports from './Reports';
import Profile from './Profile';
function Start(props){
  const [color, changeColor] = useState("#e50914");
  const [color1, changeColor1] = useState("#000003");
  const [color2, changeColor2] = useState("#000003");
 return(
           <div className="MainPage">
               <BrowserRouter>
                <nav className="navB" >
                    <div className="listB">
                        <h5 className="user">{props.username}</h5>
                        <Link style={{ background: color }} className="linkB" onClick={() => {changeColor("#e50914"); changeColor2("#000003");changeColor1("#000003")}} to="/Start" >Start a Quiz</Link>
                        <Link style={{ background: color1 }} className="linkB" onClick={() => {changeColor1("#e50914"); changeColor2("#000003"); changeColor("#000003")}} to="/Reports" >Reports</Link>
                        <Link style={{ background: color2 }} className="linkB" onClick={() => {changeColor2("#e50914"); changeColor("#000003"); changeColor1("#000003")}} to="/Profile" >Profile</Link>
                        <h5 className="linkB" >LogOut</h5>
                    </div>
              </nav>
                <Switch>
                  
                  <Route path="/Start"><NewQuiz username={props.username}/></Route>
                  <Route  path="/Reports"><Reports username={props.username}/></Route>
                  <Route  path="/Profile"><Profile username={props.username}/></Route>
                  <Route exact path="/"><NewQuiz username={props.username}/></Route>
                </Switch>
              </BrowserRouter>
           </div>
        )
}
export default Start;