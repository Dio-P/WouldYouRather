import {useState, useEffect} from "react"
import {  useSelector } from "react-redux";
import Header from "./elements/header";
import HomeBoxHolder from "./elements/homeQuestionBoxesHolder";

const GamePage = (props) => {
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
            //     answeredQuestionsPrep.push(question.id):
            //     unansweredQuestionsPrep.push(question.id)
            ));
            console.log("unansweredQuestions!1", answeredQuestionsPrep);//////////////////
            console.log("answeredQuestions!1", answeredQuestionsPrep);////////////////
            console.log("timestamp", answeredQuestionsPrep[0]);////////////////
            unansweredQuestionsPrep.sort((a,b)=> b.timestamp -a.timestamp)
            answeredQuestionsPrep.sort((a,b)=> b.timestamp - a.timestamp)
            console.log("unansweredQuestions!2", unansweredQuestionsPrep);//////////////////
            console.log("answeredQuestions!2", answeredQuestionsPrep);////////////////
            setUnansweredQuestions(unansweredQuestionsPrep);
            setAnsweredQuestions(answeredQuestionsPrep);
            console.log("Object.values(questionsData)", Object.values(questionsData));
            // console.log("answeredQuestionsPrep", answeredQuestionsPrep);
},[])

    // useEffect(() => {
    //     console.log("unansweredQuestions", unansweredQuestions);//////////////////
    //     console.log("answeredQuestions", answeredQuestions);////////////////  
    // }, [unansweredQuestions, answeredQuestions]);

    return(
        <div>
            <Header/>
            <h1>Game Page</h1>

            <HomeBoxHolder 
            answeredQuestions={answeredQuestions}
            unansweredQuestions={unansweredQuestions}
            questionId={props.questionId}
            />
            
        </div>
    )
}

export default GamePage;