import {useState, useEffect} from "react"
import {  useSelector } from "react-redux";
import Header from "../elements/header";
import HomeBoxHolder from "../elements/homeQuestionBoxesHolder";

const GamePage = ({ questionId }) => {
    const [unansweredQuestions, setUnansweredQuestions] = useState([]);
    const unansweredQuestionsPrep = [];
    const [answeredQuestions, setAnsweredQuestions] = useState([])
    const answeredQuestionsPrep = []
    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)
    const questionsData = useSelector(state=> state.getQuestions)
    
    
    useEffect(()=>{
       
            Object.values(questionsData).map(question=>(
                question.optionOne.votes.includes(users[partID].id) || question.optionTwo.votes.includes(users[partID].id)? 
                    (question["answered"]= true,
                    answeredQuestionsPrep.push(question))
                    :
                    (question["unanswered"]= false,
                    unansweredQuestionsPrep.push(question))
            ));
            unansweredQuestionsPrep.sort((a,b)=> b.timestamp -a.timestamp)
            answeredQuestionsPrep.sort((a,b)=> b.timestamp - a.timestamp)

            setUnansweredQuestions(unansweredQuestionsPrep);
            setAnsweredQuestions(answeredQuestionsPrep);
},[])

    return(
        <div>
            <Header/>
            <h1>Game Page</h1>

            <HomeBoxHolder 
            answeredQuestions={answeredQuestions}
            unansweredQuestions={unansweredQuestions}
            questionId={questionId}
            />
        </div>
    )
}

export default GamePage;