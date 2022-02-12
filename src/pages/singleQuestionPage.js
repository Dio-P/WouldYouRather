import {useLocation} from "react-router-dom"
import {  useSelector, useDispatch } from "react-redux";
import {
    Route,
    Routes,
    Router, 
    Link
  } from "react-router-dom";
import QuestionBox from "../elements/answeringQuestionBox"
import Header from "../elements/header";
import "../style/main.css"

const SinglePageQuestion = () => {
    const location = useLocation();
    // const  {question} = location.state.question;
    const questionID = useSelector(state=> state.questionID)

    return(
        <div>
            <Header/>
            <QuestionBox question={questionID}/>
        </div>
    )
}

export default SinglePageQuestion