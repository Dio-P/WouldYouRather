import {  useSelector } from "react-redux";
import "../style/main.css";


const LeaderBox = ({ user }) => {
    const loggedUserID = useSelector(state=> state.logID)

    return (
         
        <div className="box">

            <div className="avatarHolder"> 
                <img className="userAvatar" src={user.avatarURL} alt="a random user avatar"/>
            </div>
            <div>
                <h1 className={(user.id==loggedUserID)? "loggedUser":""}>{user.name}</h1>
            
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