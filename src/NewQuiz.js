import React  from 'react';
import "./NewQuiz.css";
function NewQuiz(){
    return(
        <div id="Start">
            <div id="form">
               <div id="Query">
                    <label id="label">Type of Quiz:</label>
                    <select name="Type" id="select">
                            <option id="Option" value="">----Select----</option>
                            <option id="Option" value="Java">Java</option>
                            <option id="Option" value="Html">HTML</option>
                            <option id="Option" value="Css">CSS</option>
                            <option id="Option" value="Javascript">Javascript</option>
                            <option id="Option" value="React">React</option>
                            <option id="Option" value="NodeJs">NodeJs</option>
                            <option id="Option" value="JSON">JSON</option>
                    </select>
                </div>
               <div id="Query">
                    <label id="label">Number of Questions:</label>
                    <select name="Numbers" id="select">
                            <option id="Option" value="">----Select----</option>
                            <option id="Option" value="10">10</option>
                            <option id="Option" value="15">15</option>
                            <option id="Option" value="20">20</option>
                            <option id="Option" value="25">25</option>
                            <option id="Option" value="25">30</option>
                            <option id="Option" value="25">50</option>
                    </select>
                </div>
                <div id="Query">
                    <label id="label">Total Time:</label>
                    <select name="Time" id="select">
                            <option id="Option" value="">----Select----</option>
                            <option id="Option" value="10">10 min</option>
                            <option id="Option" value="12">12 min</option>
                            <option id="Option" value="15">15 min</option>
                            <option id="Option" value="20">20 min</option>
                    </select>
                </div>
                <div id="Query">
                    <label id="label">Level of Quiz:</label>
                    <select name="Level" id="select">
                            <option id="Option" value="">----Select----</option>
                            <option id="Option" value="Beginner">Beginner</option>
                            <option id="Option" value="Medium">Medium</option>
                            <option id="Option" value="Hard">Hard</option>
                    </select>
                </div>
                <div id="Query">
                    <label id="label">Starting Time:</label>
                    <select name="Starting" id="select">
                            <option id="Option" value="">----Select----</option>
                            <option id="Option" value="2">After 2 min</option>
                            <option id="Option" value="2">After 5 min</option>
                            <option id="Option" value="10">After 10 min</option>
                            <option id="Option" value="20">After 20 min</option>
                            <option id="Option" value="30">After 30 min</option>
                            <option id="Option" value="60">After 1 hour</option>
                            <option id="Option" value="90">After 1 hour 30 min</option>
                            <option id="Option" value="120">After 2 hour</option>
                    </select>
                </div>
            </div>
            <div id="center">
                <button type="button" id="button">Schedule Quiz</button>
                <h4 id="label">After Scheduling quiz please check in report section!!!</h4>
            </div>
        </div>
    )

}

export default NewQuiz;