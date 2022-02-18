import { useState } from "react";
import {  useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savingNewQuestion, updatingNewQuestionUserCreated } from "../Actions";
import Header from "../elements/header";
import { _saveQuestion } from "../_DATA";

import "../style/main.css"


const CreateQuestionForm =() => {

    const [optionOneText, setOptionOneText] = useState("");
    const [optionTwoText, setOptionTwoText] = useState("");

    const questions = useSelector(state=> state.getQuestions)
    const questionID = useSelector(state=> state.questionID)
    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)
    const auth = users[partID].id
    const dispatch = useDispatch();
    let navigate = useNavigate();

    function formatQuestion ({ optionOneText, optionTwoText, author }) {
      return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
          votes: [],
          text: optionOneText,
        },
        optionTwo: {
          votes: [],
          text: optionTwoText,
        }
      }
    }
    
    function generateUID () {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }


  const formSubmit = () => {
    
        const question = {optionOneText, optionTwoText, author: auth}
        const formattedQuestion = formatQuestion({optionOneText, optionTwoText, author: auth})
        dispatch(savingNewQuestion(formattedQuestion))
        dispatch(updatingNewQuestionUserCreated({auth, formattedQuestion})); //originaly auth was authorised user
        _saveQuestion(question);
        
        navigate("/")

  }

    return(
        <div>
            <Header/>
            <h1 className="would_you_rather_title">Would you rather</h1>
            <div className="main_card_style add_question_card_style" >
                <label for="opt1">Option One Text</label>  
                <input type="text" name="opt1" value={optionOneText} onChange={event=>setOptionOneText(event.target.value)}/>
        
                <label for="opt2">Option Two Text</label>
                <input type="text" name="opt2" value={optionTwoText} onChange={event=>setOptionTwoText(event.target.value)}/>
                
                <button className="main_button_style" type="submit" value="submit" onClick={ formSubmit}>Answer</button>
            </div>
        </div>
    )
}
export default CreateQuestionForm