import { useEffect, useState } from "react";
import {  useSelector, useDispatch } from "react-redux";
import "../style/main.css";


const LeaderBox = (props) => {
    const questionsData = useSelector(state=> state.getQuestions)/////////////
    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)/////////////
    const [ totalScore, setTotalScore ] = useState(0)
    const [ totalQuestionsAnswered, setTotalQuestionsAnswered ] = useState(0)
    const [ totalQuestionsCreated, setTotalQuestionsCreated ] = useState(0)
    const gettingTotalScores = props.gettingTotalScores;

    useEffect(()=>{
        // console.log("users are!@#$%&*&^%$#@!^#%@$#^$*@", users);/////////////
        // console.log("users are!@#$%&*&^%$#@!^#%@$#^$*@", questionsData);/////////////
        // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Object.values(questionsData)", Object.values(questionsData));/////////////
        // console.log("Object.keys(props.user.answers).length !!!!!!!!!!!!!!!", Object.keys(props.user.answers).length);/////////////
        
        // Object.values(questionsData).map(question => {
            // if(question.optionOne.votes.includes(props.user.id) || question.optionTwo.votes.includes(props.user.id)){
            //     setTotalQuestionsAnswered(totalQuestionsAnswered+1)
                // +Object.keys(props.user.answers).length !!!!!!!!!!!!!!!
        //     }
        // })
        setTotalQuestionsAnswered(Object.keys(props.user.answers).length);
        setTotalQuestionsCreated( users[props.user.id].questions.length);        
    }, [])

    useEffect(()=>{
        setTotalScore(totalQuestionsCreated + totalQuestionsAnswered)
    }, [totalQuestionsCreated, totalQuestionsAnswered])

    // useEffect(() => {
    //     console.log("totalScore", totalScore);
    //     gettingTotalScores({totalScore, userID: props.user.id})
        
    // }, [totalScore])


    return (
        <div class="box">
            <div class="avatarHolder"> 
                <img id="userAvatar" src={users[props.user.id].avatarURL} alt="a random user avatar"/>
            </div>
            <div>
                <h1>{props.user.name}</h1>
            
            <div>
                <h3>Answered Questions: {totalQuestionsAnswered}</h3>
                <h3>Created Questions: {totalQuestionsCreated}</h3>
            </div>
            </div>
            <div id="scoreHolder">
                <div> Score: {totalScore} </div>
            </div>


        </div>
    )
}

export default LeaderBox