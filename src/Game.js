import {useState, useEffect} from "react"
import {  useSelector, useDispatch } from "react-redux";
import { getUsers, gettingUsers, login_id, giveUserDetails, signIn, questionsInState, usersInState  } from "./Actions";
import Header from "./elements/header";
import QuestionBox from "./elements/answeringQuestionBox";
import { getInitQuestions, getInitUsers } from "./dataConnect/dateMiddleLink";
// from the data ask the .idName.name
import {_saveQuestionAnswer,
        _saveQuestion,
        _getQuestions,
        _getUsers} from "./_DATA"
import HomeBoxHolder from "./elements/homeQuestionBoxesHolder";

const GamePage = (props) => {
    const [unansweredQuestions, setUnansweredQuestions] = useState([]);
    const unansweredQuestionsPrep = [];
    const [answeredQuestions, setAnsweredQuestions] = useState([])
    const answeredQuestionsPrep = []
    const initialQuestions = []

    const users = useSelector(state=> state.getUsers)
    // const [users, setUsers] = useState([])
    const partID = useSelector(state=> state.logID)
    const questionsData = useSelector(state=> state.getQuestions)
    const dispatch = useDispatch();

    

    useEffect(()=>{
        // getInitUsers()
        // .then(users=>{
        //     dispatch(usersInState(users));
        //     // setUsers(users);
        //     console.log("users!!!!!!!!!!!!!!", users)
        // })

        // console.log("partID!!!!!!!!!!!", partID)

        // getInitQuestions()
        // .then(questions=> {
        //     console.log("questions before dispatch in app are:", questions);
        //     dispatch(questionsInState(questions));

            // initialQuestions.push(questions);
            console.log("users[partID].id is___________________+++++++", users[partID].id);
            console.log("Object.values(questionsData)??????????????????????", Object.values(questionsData));
            console.log("True or false????????????????????????", Object.values(questionsData)[1].optionOne.votes.includes(users[partID].id))
            Object.values(questionsData).map(question=>(
                question.optionOne.votes.includes(users[partID].id) || question.optionTwo.votes.includes(users[partID].id)? 
                answeredQuestionsPrep.push(question.id):
                unansweredQuestionsPrep.push(question.id)
            ));
            setUnansweredQuestions(unansweredQuestionsPrep);
            setAnsweredQuestions(answeredQuestionsPrep);
            console.log("props.questionID in Game", props.questionID);
        // })
        // getInitUsers()
        // .then(users=>{console.log("users before dispatch in app are", users); dispatch(usersInState(users))});
        // const getQuestions = async() => {return await questionsData}
},[])

    useEffect(()=>{
        console.log("unanswered questions are:", unansweredQuestions);
        console.log("answered questions are:", answeredQuestions);
    }, [unansweredQuestions, answeredQuestions])


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