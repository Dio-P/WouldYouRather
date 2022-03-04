import {  useSelector, useDispatch } from "react-redux";
import { QIDtoState } from "../Actions";
import "../style/main.css"
import { Link } from "react-router-dom";

const QuestionSample = ({ question }) => {

    
    const questionsData = useSelector(state=> state.getQuestions)
    const users = useSelector(state=> state.getUsers)
    const dispatch = useDispatch();
    const questionToUse = Object.values(question);


    const returningAnswer = (event) => {
        event.preventDefault()
        const returnedA = event.target.value;
        return returnedA
    }

    const passingQid = () => {
        dispatch(QIDtoState(question.id))

    }

    return(
        <div className="main_card_style game_quest_sample">
            <div className="avatarHolder"> 
                <img className="userAvatar" src={users[questionsData[question.id].author].avatarURL} alt="a random user avatar"/>
            </div>
            <fieldset className="main_fieldset" onChange={(event)=> returningAnswer(event)}>
                <div>
                <h4>...{questionsData[question.id].optionOne.text}...</h4>
                </div>
                <div>
                <Link  to={{pathname: `/question/:${question.id}`,
                state: {question:question.id}}}><button className="main_button_style" onClick={passingQid}> {questionToUse.answered? "View Question": "Answer Question"}</button></Link>
                </div>
            </fieldset>
        </div>
    )
}

export default QuestionSample