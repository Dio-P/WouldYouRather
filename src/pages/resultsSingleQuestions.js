import {  useSelector, useDispatch } from "react-redux";
import "../style/allBoxes.css";

const SingleQResults = () => {
    const questionsData = useSelector(state=> state.getQuestions)
    const questionID = useSelector(state=> state.questionID)
    const users = useSelector(state=> state.getUsers)
    
    return (
        <div class="box">
            <h4>asked by: {users[questionsData[questionID].author].name} </h4>
            <h1>Results</h1>
            <div className="avatarHolder"> 
                <img id="userAvatar" src={users[questionsData[questionID].author].avatarURL} alt="a random user avatar"/>
            </div>
            <div>
                <h5>question1</h5>
                <p>results stats</p>
            </div>
            <div>
                <h5>question2</h5>
                <p>result stats</p>
            </div>
        </div>
    )
}

export default SingleQResults