import {  useSelector, useDispatch } from "react-redux";
import "../style/allBoxes.css";


const LeaderBox = (props) => {
    const questionsData = useSelector(state=> state.getQuestions)
    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)


    return (
        <div class="box">
            <div class="avatarHolder"> 
                <img id="userAvatar" src={users[partID].avatarURL} alt="a random user avatar"/>
            </div>
            <div>
                <h1>User Name {props.user.name}</h1>
            
            <div>
                <h3>Answered Questions: </h3>
                <h3>Created Questions: </h3>
            </div>
            </div>
            <div id="scoreHolder">
                <div> Score</div>
            </div>


        </div>
    )
}

export default LeaderBox