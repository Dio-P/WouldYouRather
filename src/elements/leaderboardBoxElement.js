import { useEffect, useState } from "react";
import {  useSelector, useDispatch } from "react-redux";
import "../style/main.css";


const LeaderBox = ({ user }) => {

    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)/////////////

    return (
         
        <div class="box">

            <div class="avatarHolder"> 
                <img className="userAvatar" src={user.avatarURL} alt="a random user avatar"/>
            </div>
            <div>
                <h1>{user.name}</h1>
            
            <div>
                <h3>Answered Questions: {user.scores.totalQuestionsAnswered}</h3>
                <h3>Created Questions: {user.scores.totalQuestionsCreated}</h3>
            </div>
            </div>
            <div className="scoreHolder">
                <h3> Score: {user.scores.totalScore} </h3>
            </div>

        </div>
    )
}

export default LeaderBox