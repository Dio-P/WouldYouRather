import {useEffect} from "react";
import {  useSelector, useDispatch } from "react-redux";
// import "../style/allBoxes.css";
import singleQuestionID from "../Reducers/singleQuestionId";
import {
    Route,
    Routes,
    Router, 
    Link
  } from "react-router-dom";
import "../style/main.css"

const QuestionBox = (props) => {

    const questionsData = useSelector(state=> state.getQuestions)
    const questionID = useSelector(state=> state.questionID)
    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)



    const returningAnswer = (event) => {
        event.preventDefault()
        const returnedA = event.target.value;
        console.log("returnedA", returnedA);
        return returnedA
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
                <div>
                <input type= "checkbox" id="a1" name="a1" value="optionOne"/>
                <label for="a1">{questionsData[questionID].optionOne.text}</label>
                </div>
                <div>
                <input type= "checkbox" id="a2" name="a2" value="optionTwo"/>
                <label>{questionsData[questionID].optionTwo.text}</label>
                </div>
                <Link to="/results"><button className="button"> Submit</button></Link> 
            </fieldset>
        </div>
    )
}

export default QuestionBox