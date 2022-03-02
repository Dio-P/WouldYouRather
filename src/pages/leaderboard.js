import React, { useState, useEffect } from 'react';
import {  useSelector, useDispatch } from "react-redux";
import LeaderBox from "../elements/leaderboardBoxElement"
import Header from "../elements/header";
import "../style/main.css";

const LeaderboardPage =() => {
    const questionsData = useSelector(state=> state.getQuestions);
    const users = useSelector(state=> state.getUsers);
    const partID = useSelector(state=> state.logID);
    const [totalScores, setTotalScores] = useState([])
    let newTotalScores = [];

    let sortedUsers = Object.values(users)   
    // .totalScore
    

    useEffect(() => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!totalScores", totalScores);
        console.log("totalScores.sort", totalScores.sort((a, b) => a.totalScore - b.totalScore).reverse());

    }, [totalScores])

    const gettingTotalScores = ({totalScore, userID}) => {
        
        newTotalScores.push({totalScore, userID})
        setTotalScores(newTotalScores) 
    }

    return (
        <div>
            <Header/>
            <h1>LeaderBoard Page</h1>
            <div className="main_card_style leaderBoard_box">
            {sortedUsers.map(user=>(<LeaderBox gettingTotalScores={({totalScore, userID}) => gettingTotalScores({totalScore, userID})} user={user}/>))}
            </div>
        </div>
    )
}

export default LeaderboardPage