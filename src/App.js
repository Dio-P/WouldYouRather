import {useState, useEffect} from "react";
import {  useSelector, useDispatch, connect } from "react-redux";
import { questionsInState, usersInState } from "./Actions";
import LogInPage from './loginPage';
import GamePage from './Game';
import {
  Route,
  Routes,
  Outlet,
  useNavigate
} from "react-router-dom";
import LeaderboardPage from './pages/leaderboard';
import CreateQuestionForm from './pages/createNewPollForm';
import SinglePageQuestion from './pages/singleQuestionPage';
import { getInitQuestions, getInitUsers } from "./dataConnect/dateMiddleLink";
import SingleQResults from "./pages/resultsSingleQuestions";
import './App.css';



const mapStateToProps = state => { 
  return {
      logedOrNot: state.isLogged 
  }
}


function App() {

  const [questionId, setQuestionId] = useState("")

  const counter = useSelector(state=> state.counter);
  const loggedIn = useSelector(state=> state.isLogged);
  const users = useSelector(state=> state.getUsers);
  const loading= useSelector(state=> state.loading);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    getInitQuestions()
    .then(questions=> {console.log("questions before dispatch in app are:", questions);dispatch(questionsInState(questions))})
    getInitUsers()
    .then(users=>{console.log("users before dispatch in app are", users); dispatch(usersInState(users))})
    

  },[])

  useEffect(()=>{
    return loggedIn?navigate("/home")
    : navigate("/") 
  }, [loggedIn])

  const ProtectedRoutes=() => {
    if(loggedIn){
      return <Outlet/>
    }else if(loggedIn===false){
      return <LogInPage/>
    }
  };

  const RedirectToHome = () => {
    return navigate("/home");
}
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogInPage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/home" element={<GamePage 
            questionId={(questionID)=> setQuestionId(questionID)}
            />}/>
          <Route path="leaderboard" element={<LeaderboardPage/>}/>
          <Route path="/add" element={<CreateQuestionForm/>}/>
          <Route path="/question/:question_id" element={<SinglePageQuestion question={questionId}/>}/>
          <Route path="/results" element={<SingleQResults/>}/>
        </Route>
        <Route element={<RedirectToHome/>} /> 
      </Routes>
  </div>
  );
}

export default connect(mapStateToProps)(App);
