import {  useSelector, useDispatch } from "react-redux";
import { getUsers, gettingUsers, login_id, giveUserDetails, signIn  } from "./Actions";
import Header from "./elements/header";
import QuestionBox from "./elements/answeringQuestionBox";
// import _DATA.js from "./_DATA"
// from the data ask the .idName.name
import {_saveQuestionAnswer,
        _saveQuestion,
        _getQuestions,
        _getUsers} from "./_DATA"

const GamePage = () => {

    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)
    const questionsData = useSelector(state=> state.getQuestions)
    const dispatch = useDispatch();

    const testingFunctions=()=> {
        _getQuestions().then(data=>{const q = data;
            console.log("q", q);
        })
    }

// make the chosen user name presented on the header if loged is true
// start adding functionality on the game page

    return(
        <div>
            <Header/>
            <h1>Game Page</h1>

            {Object.values(questionsData).map(question=>(
                question.optionOne.votes.includes(users[partID].id) || question.optionTwo.votes.includes(users[partID].id)? 
                console.log(question.id, "question is answered"): console.log(question.id, "question is not answered")
            ))}

            {/* map over question. create an array that are combined
            all the users that have answered one of the two questions
            create a conditional (array includes(username))? question answered
            : question unaswered and added to an array with the unaswered questions */}
            <button onClick={()=> testingFunctions()}>Test</button>
            {JSON.stringify(Object.values(questionsData))}
            {JSON.stringify(Object.values(users))}
            <QuestionBox/>
        </div>
    )
}

export default GamePage;