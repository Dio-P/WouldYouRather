import {useState, useEffect} from "react";
import {  useSelector, useDispatch } from "react-redux";
import "../style/allBoxes.css";
import {
    Route,
    Routes,
    Router, 
    Link
  } from "react-router-dom";

const QuestionSample = (props) => {


    const questionsData = useSelector(state=> state.getQuestions)
    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)
    const question=props.question;



    const returningAnswer = (event) => {
        event.preventDefault()
        const returnedA = event.target.value;
        console.log("returnedA", returnedA);
        return returnedA
    }

    useEffect(()=>{
        console.log("props.question is2", props.question);
        console.log("questionData[props.question] is:", questionsData[props.question])
        console.log("props.questionID", props.questionID);
    }, [])

    return(
        <div class="mainBox">
            <div className="avatarHolder"> 
                <img id="userAvatar" src={users[questionsData[props.question].author].avatarURL} alt="a random user avatar"/>
            </div>
            <fieldset onChange={(event)=> returningAnswer(event)}>
                <div>
                <h4>...{questionsData[props.question].optionOne.text}...</h4>
                </div>
                <div>
                <Link to={{pathname: "question/:question_id",
                state: {question:props.question}}}><button> Answer Question</button></Link>
                </div>
            </fieldset>
        </div>
    )
}

export default QuestionSample