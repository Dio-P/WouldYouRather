import {useState, useEffect} from "react";
import {  useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savingNewQuestion } from "../Actions";
import { getInitQuestions } from "../dataConnect/dateMiddleLink";
import Header from "../elements/header";
import HomeBoxHolder from "../elements/homeQuestionBoxesHolder";
import { formatQuestion, _saveQuestion} from "../_DATA";
import GamePage from '../Game'
import "../style/main.css"
import reduxDevtoolsExtension from 'redux-devtools-extension'

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


    // useEffect(()=>{
    //     formatQuestion(optionOneText, optionTwoText, users[partID].name);
    //     console.log("formatQuestion is: ", formatQuestion())
        
    // }, [optionOneText, optionTwoText])

  const formSubmit = () => {
    
        const question = {optionOneText, optionTwoText, author: auth}
        const newQuestion = formatingQuestion(optionOneText, optionTwoText, auth)
        dispatch(savingNewQuestion(optionOneText, optionTwoText, auth))
        
        _saveQuestion(question);
        console.log("getInitQuestions second !!!!!!!!!!!", getInitQuestions())

        console.log("formatQuestion is: ", formatingQuestion(optionOneText, optionTwoText, auth))///////////////
        console.log("optionOneText", optionOneText);/////////////////////
        console.log("optionTwoText", optionTwoText);////////////////////
        navigate("/")

  }


  const formatingQuestion = (optionOneText, optionTwoText, author) =>{
      console.log("optionOneText from within the for Quest action", optionOneText)
      console.log("optionTwoText from within the for Quest action", optionTwoText)

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