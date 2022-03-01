import {useEffect, useState} from "react";
import {  useSelector, useDispatch } from "react-redux";
// import "../style/allBoxes.css";
import singleQuestionID from "../Reducers/singleQuestionId";
import { questionsInState, saveUserNewAnswer, saveNewAnswer } from "../Actions";
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
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [answer, setAnswer] = useState("");
    const [checked, setChecked] = useState({optionOneChecked: false, optionTwoChecked: false});
    // const [questionAnswered, setQuestionAnswered] = useState(false)
    let questionAnswered = Object.keys(users[partID].answers).includes(questionID);
   

    const updatingTheState = () => {
        _saveQuestionAnswer ({ authedUser: partID, qid: questionID, answer: answer });
        dispatch(saveNewAnswer({ authedUser: partID, qid: questionID, answer: answer }))
        console.log("saveNewAnswer have been dispached&&&&&&&&&&&");//////////////
        dispatch(saveUserNewAnswer({ authedUser: partID, qid: questionID, answer: answer }));
        console.log("saveUserNewAnswer have been dispached&&&&&&&&&&&");////////////////////
        
    }

    const returningAnswer = (event) => {
        event.preventDefault()
        // const returnedAnswer = event.target.value;
        console.log("returnedA", answer);//////////////
        if(questionAnswered===false){
            updatingTheState()
        }
        
        navigate("/results")
    }

    useEffect(()=>{
        // console.log( "Object.keys(users[partID].answers)", Object.keys(users[partID].answers))
        console.log("props.question is2", props.question);////////////////////
        console.log("questionData[props.question] is:", questionsData[props.question])////////////////////
        console.log("questionAnswered", questionAnswered);////////////////////
        // setQuestionAnswered(questionsData[questionID].optionOne.votes.includes(partID) || questionsData[questionID].optionTwo.votes.includes(partID))
    }, [])

    useEffect(() => {
        console.log("questionAnswered", questionAnswered);
        
    }, [questionAnswered])


    return(
        <div className="main_card_style answering_questions_box">
            <div className="avatarHolder"> 
                <img id="userAvatar" src={users[questionsData[questionID].author].avatarURL} alt="a random user avatar"/>
            </div>
            {/* <fieldset className="main_fieldset" onChange={(event)=> returningAnswer(event)}> */}
                <form className="main_fieldset" onSubmit={returningAnswer}>
                    <div>
                        <input type= "checkbox" onChange={event=> {
                            setAnswer(event.target.value)
                            setChecked({optionOneChecked: true, optionTwoChecked: false})
                            }} checked={checked.optionOneChecked} id="a1" name="a1" value="optionOne"/>
                        <label for="a1">{questionsData[questionID].optionOne.text}</label>
                    </div>
                    <div>
                        <input type= "checkbox" onChange={event=> {
                            setAnswer(event.target.value)
                            setChecked({optionOneChecked: false, optionTwoChecked: true})
                            }} checked={checked.optionTwoChecked} id="a2" name="a2" value="optionTwo"/>
                        <label>{questionsData[questionID].optionTwo.text}</label>
                    </div>
                    <button type="submit" className="button"> {questionAnswered? "View Poll": "Submit"} </button>
                </form>
            {/* </fieldset> */}
        </div>
    )
}

export default QuestionBox