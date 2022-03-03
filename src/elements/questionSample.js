import {  useSelector, useDispatch } from "react-redux";
import { QIDtoState } from "../Actions";
import "../style/main.css"
import { Link } from "react-router-dom";

const QuestionSample = (props) => {

    
    const questionsData = useSelector(state=> state.getQuestions)
    const users = useSelector(state=> state.getUsers)
    const loggedUserID = useSelector(state=> state.logID)
    const dispatch = useDispatch();
    
    let questionAnswered = Object.keys(users[loggedUserID].answers).includes(props.question);



    const returningAnswer = (event) => {
        event.preventDefault()
        const returnedA = event.target.value;
        return returnedA
    }

    const passingQid = () => {
        dispatch(QIDtoState(props.question))

    }

    return(
        <div className="main_card_style game_quest_sample">
            <div className="avatarHolder"> 
                <img className="userAvatar" src={users[questionsData[props.question].author].avatarURL} alt="a random user avatar"/>
            </div>
            <fieldset className="main_fieldset" onChange={(event)=> returningAnswer(event)}>
                <div>
                <h4>...{questionsData[props.question].optionOne.text}...</h4>
                </div>
                <div>
                <Link  to={{pathname: `/question/:${props.question}`,
                state: {question:props.question}}}><button className="main_button_style" onClick={passingQid}> {questionAnswered? "View Question": "Answer Question"}</button></Link>
                </div>
            </fieldset>
        </div>
    )
}

export default QuestionSample