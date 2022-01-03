import {  useSelector, useDispatch } from "react-redux";
import "../style/allBoxes.css";


const LeaderBox = () => {
    const questionsData = useSelector(state=> state.getQuestions)
    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)


    return (
        <div>
            <div class="avatarHolder"> 
                <img id="userAvatar" src={users[partID].avatarURL} alt="a random user avatar"/>
            </div>
            <h1>User Name</h1>
            <h3>Answered Questions: </h3>
            <h3>Created Questions: </h3>
            <div id="scoreHolder">
                <div> Score</div>
            </div>


        </div>
    )
}

export default LeaderBox