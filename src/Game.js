import {  useSelector, useDispatch } from "react-redux";
import { getUsers, gettingUsers, login_id, giveUserDetails, signIn  } from "./Actions";
import Header from "./elements/header";
import QuestionBox from "./pages and elements/answeringQuestionBox";
// import _DATA.js from "./_DATA"
// from the data ask the .idName.name

const GamePage = () => {

    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)
    const questionsData = useSelector(state=> state.getQuestions)
    const dispatch = useDispatch();

// make the chosen user name presented on the header if loged is true
// start adding functionality on the game page

    return(
        <div>
            <Header/>
            <h1>Game Page</h1>
            {JSON.stringify(Object.values(questionsData))}
            {JSON.stringify(Object.values(users))}
            <QuestionBox/>
        </div>
    )
}

export default GamePage;