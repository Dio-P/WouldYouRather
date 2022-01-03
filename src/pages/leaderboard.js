import {  useSelector, useDispatch } from "react-redux";
import LeaderBox from "../elements/leaderboardBoxElement"

const LeaderboardPage =() => {
    const questionsData = useSelector(state=> state.getQuestions)
    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)

    return (
        <div>
            <h1>LeaderBoard Page</h1>
            <div>
            {Object.values(users).map(user=>(<LeaderBox user={user}/>))}
            </div>
        </div>
    )
}

export default LeaderboardPage