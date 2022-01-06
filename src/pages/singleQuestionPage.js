import {useLocation} from "react-router-dom"
import {
    Route,
    Routes,
    Router, 
    Link
  } from "react-router-dom";
import QuestionBox from "../elements/answeringQuestionBox"

const SinglePageQuestion = () => {
    const location = useLocation();
    const  {question} = location.state.question;

    return(
        
        <QuestionBox question={question}/>
    )
}

export default SinglePageQuestion