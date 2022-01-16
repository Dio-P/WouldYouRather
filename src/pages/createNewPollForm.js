import {useState, useEffect} from "react";
import {  useSelector, useDispatch } from "react-redux";
import { savingNewQuestion } from "../Actions";
import { getInitQuestions } from "../dataConnect/dateMiddleLink";
import "../style/allBoxes.css"
import Header from "../elements/header";
import { formatQuestion, _saveQuestion} from "../_DATA";

const CreateQuestionForm =() => {

    const [optionOneText, setOptionOneText] = useState("");
    const [optionTwoText, setOptionTwoText] = useState("");

    const questions = useSelector(state=> state.getQuestions)
    const questionID = useSelector(state=> state.questionID)
    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)
    const auth = users[partID].name
    const dispatch = useDispatch();


    // useEffect(()=>{
    //     formatQuestion(optionOneText, optionTwoText, users[partID].name);
    //     console.log("formatQuestion is: ", formatQuestion())
        
    // }, [optionOneText, optionTwoText])

  const formSubmit = () => {
 
        dispatch(savingNewQuestion(formatingQuestion(optionOneText, optionTwoText, auth)))
        
          _saveQuestion(formatQuestion(optionOneText, optionTwoText, auth));
          console.log("getInitQuestions second !!!!!!!!!!!", getInitQuestions())

        console.log("formatQuestion is: ", formatQuestion(optionOneText, optionTwoText, auth))///////////////
        console.log("optionOneText", optionOneText);/////////////////////
        console.log("optionTwoText", optionTwoText);////////////////////
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
            <h1>Form for adding question</h1>
            <div className="box" >
                <label>
                    Option One Text
                    <input type="text" name="opt1" value={optionOneText} onChange={event=>setOptionOneText(event.target.value)}/>
                </label>
                <label>
                    Option Two Text
                    <input type="text" name="opt2" value={optionTwoText} onChange={event=>setOptionTwoText(event.target.value)}/>
                </label>
                <button type="submit" value="submit" onClick={ formSubmit}>Answer</button>
            </div>
        </div>
    )
}
export default CreateQuestionForm