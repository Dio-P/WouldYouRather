import {
    Route,
    Routes,
    Router, 
    Link
  } from "react-router-dom";
import QuestionBox from "../elements/answeringQuestionBox"

const SinglePageQuestion = (props) => {

    return(
        
        <QuestionBox question={props.question}/>
    )
}

export default SinglePageQuestion