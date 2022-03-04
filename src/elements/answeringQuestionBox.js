import { useState } from "react";
import {  useSelector, useDispatch } from "react-redux";
import { saveUserNewAnswer, saveNewAnswer } from "../Actions";
import { _saveQuestionAnswer } from "../_DATA";
import { useNavigate } from "react-router-dom";
import "../style/main.css"

const QuestionBox = () => {

    const questionsData = useSelector(state=> state.getQuestions);
    const questionID = useSelector(state=> state.questionID);
    const users = useSelector(state=> state.getUsers);
    const loggedUserID = useSelector(state=> state.logID);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [answer, setAnswer] = useState("");
    const [checked, setChecked] = useState({optionOneChecked: false, optionTwoChecked: false});
    let questionAnswered = Object.keys(users[loggedUserID].answers).includes(questionID);
   

    const updatingTheState = () => {
        _saveQuestionAnswer ({ authedUser: loggedUserID, qid: questionID, answer: answer });
        dispatch(saveNewAnswer({ authedUser: loggedUserID, qid: questionID, answer: answer }))
        dispatch(saveUserNewAnswer({ authedUser: loggedUserID, qid: questionID, answer: answer })); 
    }

    const returningAnswer = (event) => {
        event.preventDefault()
        if(questionAnswered===false){
            updatingTheState()
        }
        navigate("/results")
    }

    return(
        <div className="main_card_style answering_questions_box">
            <h2>Would you Rather</h2>
            <div className="avatarHolder"> 
                <img className="userAvatar" src={users[questionsData[questionID].author].avatarURL} alt="a random user avatar"/>
            </div>
                <form className="main_fieldset" onSubmit={returningAnswer}>
                    <div>
                        <input type= "checkbox" onChange={event=> {
                            setAnswer(event.target.value)
                            if(!questionAnswered){
                            setChecked({optionOneChecked: true, optionTwoChecked: false})}
                            }} checked={checked.optionOneChecked} id="a1" name="a1" value="optionOne"/>
                        <label for="a1">{questionsData[questionID].optionOne.text}</label>
                    </div>
                    <div>
                        <input type= "checkbox" onChange={event=> {
                            setAnswer(event.target.value)
                            if(!questionAnswered){
                            setChecked({optionOneChecked: false, optionTwoChecked: true})}
                            }} checked={checked.optionTwoChecked} id="a2" name="a2" value="optionTwo"/>
                        <label>{questionsData[questionID].optionTwo.text}</label>
                    </div>
                    <button type="submit" className="button"> {questionAnswered? "View Poll": "Submit"} </button>
                </form>
        </div>
    )
}

export default QuestionBox