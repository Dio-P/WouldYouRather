import { useEffect, useState } from "react";
import {  useSelector, useDispatch } from "react-redux";
import "../style/main.css";


const LeaderBox = (props) => {
    const questionsData = useSelector(state=> state.getQuestions)
    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)/////////////
    const [ totalScore, setTotalScore ] = useState(0)
    const [ totalQuestionsAnswered, setTotalQuestionsAnswered ] = useState(0)
    const [ totalQuestionsCreated, setTotalQuestionsCreated ] = useState(0)

    useEffect(()=>{
        console.log("users are!@#$%&*&^%$#@!^#%@$#^$*@", users);/////////////
        console.log("users are!@#$%&*&^%$#@!^#%@$#^$*@", questionsData);/////////////
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Object.values(questionsData)", Object.values(questionsData));/////////////
        console.log("Object.keys(props.user.answers).length !!!!!!!!!!!!!!!", Object.keys(props.user.answers).length);/////////////
        // Object.values(questionsData).map(question => {
            // if(question.optionOne.votes.includes(props.user.id) || question.optionTwo.votes.includes(props.user.id)){
            //     setTotalQuestionsAnswered(totalQuestionsAnswered+1)
                // +Object.keys(props.user.answers).length !!!!!!!!!!!!!!!
        //     }
        // })
        setTotalQuestionsAnswered(Object.keys(props.user.answers).length);
        console.log("+++++++++++++++Object.values(users)[1].questions.length+++++++",Object.values(users)[1].questions.length);/////////////
        setTotalQuestionsCreated( users[props.user.id].questions.length);
        console.log("userId: ", props.user.id, "questions created: ", users[props.user.id].questions.length);/////////////
        
        
        // console.log("+++++++++++++++counter2+++++++", counter);
    }, [])

    useEffect(()=>{
        setTotalScore(totalQuestionsCreated + totalQuestionsAnswered)
    }, [totalQuestionsCreated, totalQuestionsAnswered])

    // const countingScore = () => {
    //     let questions = Object.values(questionsData);
    //     let allUsers = Object.values(users);
    //     let score = 0
    //     for(user of allUsers){
    //         console.log("user", user)
    //         for(question of questions){
    //             if(question.author === user){
    //                 score +=1;
    //                 console.log("score1",score);
    //             }
    //             else if(question.optionOne.votes.includes(user)){
    //                 score +=1;
    //                 console.log("score2",score);
    //             }
    //             else if(question.optionTwo.votes.includes(user)){
    //                 score +=1;
    //                 console.log("score3",score);
    //             }
    //         }
    //     }
    // }


    return (
        <div class="box">
            <div class="avatarHolder"> 
                <img id="userAvatar" src={users[props.user.id].avatarURL} alt="a random user avatar"/>
            </div>
            <div>
                <h1>User Name {props.user.name}</h1>
            
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