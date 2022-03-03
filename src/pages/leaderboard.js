import React, { useState, useEffect } from 'react';
import {  useSelector } from "react-redux";
import LeaderBox from "../elements/leaderboardBoxElement"
import Header from "../elements/header";
import "../style/main.css";

const LeaderboardPage =() => {
    const users = useSelector(state=> state.getUsers);
    const [sortedUsersInOrder, setSortedUsersInOrder] = useState([])
    let sortedUsersTemp = Object.values(users)   
    
    useEffect(()=>{
        
            sortedUsersTemp.map(user => { return user["scores"]= { 
            totalQuestionsAnswered: Object.keys(user.answers).length, 
            totalQuestionsCreated: user.questions.length,
            totalScore: (Object.keys(user.answers).length+ user.questions.length)
            }
        })
        let sortedUsersInOrderTemp = sortedUsersTemp.sort((a,b)=>a.scores.totalScore - b.scores.totalScore).reverse();
        setSortedUsersInOrder(sortedUsersInOrderTemp)
        
    }, [users])


    return (
        <div>
            <Header/>
            <h1>LeaderBoard Page</h1>
            <div className="main_card_style leaderBoard_box">
            {sortedUsersInOrder.map(user=>(<LeaderBox user={user}/>))}
            </div>
        </div>
    )
}

export default LeaderboardPage