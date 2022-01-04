import {useState, useEffect} from "react"
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
    const [unansweredQuestions, setUnansweredQuestions] = useState([]);
    const unansweredQuestionsPrep = [];
    const [answeredQuestions, setAnsweredQuestions] = useState([])
    const answeredQuestionsPrep = []


    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)
    const questionsData = useSelector(state=> state.getQuestions)
    const dispatch = useDispatch();

    const testingFunctions=()=> {
        _getQuestions().then(data=>{const q = data;
            console.log("q", q);
        })
    }

    useEffect(()=>{Object.values(questionsData).map(question=>(
        question.optionOne.votes.includes(users[partID].id) || question.optionTwo.votes.includes(users[partID].id)? 
        answeredQuestionsPrep.push(question.id):
        unansweredQuestionsPrep.push(question.id)
        // setUnansweredQuestions([...unansweredQuestions, question.id])
        // console.log(question.id, "question is not answered")
        // maybe this could be in useEffect
    )); 
    setUnansweredQuestions(unansweredQuestionsPrep);
    setAnsweredQuestions(answeredQuestionsPrep);
},[])

    useEffect(()=>{
        console.log("unanswered questions are:", unansweredQuestions)
    }, [unansweredQuestions])

// make the chosen user name presented on the header if loged is true
// start adding functionality on the game page

    return(
        <div>
            <Header/>
            <h1>Game Page</h1>

            {unansweredQuestions.map(question=>(
                // console.log("question is", question)
                <QuestionBox question={question}/>
            ))}
        </div>
    )
}

export default GamePage;