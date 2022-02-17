import {useEffect, useState} from "react";
import {  useSelector, useDispatch } from "react-redux";
// import "../style/allBoxes.css";
import singleQuestionID from "../Reducers/singleQuestionId";
import { questionsInState } from "../Actions";
import { _saveQuestionAnswer} from "../_DATA";
import {
    Route,
    Routes,
    Router, 
    Link,
    useNavigate
  } from "react-router-dom";
import "../style/main.css"

const QuestionBox = (props) => {

    const questionsData = useSelector(state=> state.getQuestions);
    const questionID = useSelector(state=> state.questionID);
    const users = useSelector(state=> state.getUsers);
    const partID = useSelector(state=> state.logID);
    const [Answer, setAnswer] = useState("")
    let navigate = useNavigate();
    const dispatch = useDispatch();



    const returningAnswer = (event) => {
        event.preventDefault()
        const returnedAnswer = event.target.value;
        console.log("returnedA", returnedAnswer);
        // return returnedAnswer
        _saveQuestionAnswer ({ authedUser: partID, qid: questionID, answer: returnedAnswer});
        // dispatch(questionsInState(questions));
        navigate("/results")
    }

    useEffect(()=>{
        console.log("props.question is2", props.question);
        console.log("questionData[props.question] is:", questionsData[props.question])
    })


    return(
        <div className="main_card_style answering_questions_box">
            <div className="avatarHolder"> 
                <img id="userAvatar" src={users[questionsData[questionID].author].avatarURL} alt="a random user avatar"/>
            </div>
            <fieldset className="main_fieldset" onChange={(event)=> returningAnswer(event)}>
                {/* <form onSubmit={(event) => submitQuestion(event)}> */}
                    <div>
                        <input type= "checkbox" onChange={event=> setAnswer(event.target.value)} id="a1" name="a1" value="optionOne"/>
                        <label for="a1">{questionsData[questionID].optionOne.text}</label>
                        {/* setAnswer(event.target.value) */}
                    </div>
                    <div>
                        <input type= "checkbox" id="a2" name="a2" value="optionTwo"/>
                        <label>{questionsData[questionID].optionTwo.text}</label>
                    </div>
                    <button type="submit" className="button"> Submit</button>
                {/* </form> */}
            </fieldset>
        </div>
    )
}

export default QuestionBox