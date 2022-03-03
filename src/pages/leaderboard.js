import React, { useState, useEffect } from 'react';
import {  useSelector, useDispatch } from "react-redux";
import LeaderBox from "../elements/leaderboardBoxElement"
import Header from "../elements/header";
import "../style/main.css";

const LeaderboardPage =() => {
    const questionsData = useSelector(state=> state.getQuestions);
    const users = useSelector(state=> state.getUsers);
    const partID = useSelector(state=> state.logID);
    // const [totalScores, setTotalScores] = useState([])
    // let newTotalScores = [];
    const [ totalScore, setTotalScore ] = useState(0)
    const [ totalQuestionsAnswered, setTotalQuestionsAnswered ] = useState(0)
    const [ totalQuestionsCreated, setTotalQuestionsCreated ] = useState(0)

    let sortedUsers = Object.values(users)   
    // .totalScore
    ///////
    useEffect(()=>{
        console.log();

        sortedUsers.map(user => { return user["scores"]= { 
            totalQuestionsAnswered: Object.keys(user.answers).length, 
            totalQuestionsCreated: user.questions.length,
            totalScore: (Object.keys(user.answers).length+ user.questions.length)
            }
        })
        console.log("sortedUsers", sortedUsers);

        // setTotalQuestionsAnswered();
        // setTotalQuestionsCreated( );        
    }, [])

    // useEffect(()=>{
    //     setTotalScore(totalQuestionsCreated + totalQuestionsAnswered)
    // }, [totalQuestionsCreated, totalQuestionsAnswered])

    /////////
    

    // useEffect(() => {
    //     console.log("Object.values(users)", Object.values(users));
    //     console.log("totalScores.sort", totalScores.sort((a, b) => a.totalScore - b.totalScore).reverse());

    // }, [totalScores])

    // const gettingTotalScores = ({totalScore, userID}) => {
        
    //     newTotalScores.push({totalScore, userID})
    //     setTotalScores(newTotalScores) 
    // }

    return (
        <div>
            <Header/>
            <h1>LeaderBoard Page</h1>
            <div className="main_card_style leaderBoard_box">
            {sortedUsers.map(user=>(<LeaderBox user={user}/>))}
            </div>
        </div>
    )
}

export default LeaderboardPage