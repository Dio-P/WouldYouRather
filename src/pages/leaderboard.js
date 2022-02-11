import {  useSelector, useDispatch } from "react-redux";
import LeaderBox from "../elements/leaderboardBoxElement"
import Header from "../elements/header";

const LeaderboardPage =() => {
    const questionsData = useSelector(state=> state.getQuestions)
    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)

    return (
        <div>
            <Header/>
            <h1>LeaderBoard Page</h1>
            <div>
            {Object.values(users).map(user=>(<LeaderBox user={user}/>))}
            </div>
        </div>
    )
}

export default LeaderboardPage