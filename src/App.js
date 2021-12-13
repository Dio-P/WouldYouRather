import logo from './logo.svg';
import './App.css';
import {  useSelector, useDispatch } from "react-redux";
import {  increment, decrement } from "./Actions";
import LogInPage from './loginPage';
import GamePage from './Game';
import {
  Route,
  Routes,
  Router
} from "react-router-dom";


function App() {
  const counter = useSelector(state=> state.counter);
  const logedIn = useSelector(state=> state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
    {/* <Router> */}
      {/* <Routes> */}
        {/* <h1>Counter {counter}</h1>
        <button onClick={()=> dispatch(increment(5))}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button> */}

        {logedIn===true? "Game Page": "Login page"}
          {/* <Route path="/" element={<GamePage/>}/> */}
          
          
        {/* <Route path="LogInPage" element={<LogInPage/>}/> */}
        
        
      {/* </Routes> */}
  {/* </Router> */}
  </div>
  );
}

export default App;
