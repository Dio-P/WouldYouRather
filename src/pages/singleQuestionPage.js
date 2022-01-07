import {useLocation} from "react-router-dom"
import {  useSelector, useDispatch } from "react-redux";
import {
    Route,
    Routes,
    Router, 
    Link
  } from "react-router-dom";
import QuestionBox from "../elements/answeringQuestionBox"

const SinglePageQuestion = () => {
    const location = useLocation();
    // const  {question} = location.state.question;
    const questionID = useSelector(state=> state.questionID)

    return(
        
        <QuestionBox question={questionID}/>
    )
}

export default SinglePageQuestion