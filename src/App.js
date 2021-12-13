import logo from './logo.svg';
import './App.css';
import {  useSelector, useDispatch } from "react-redux";
import {  increment, decrement, _getUsers } from "./Actions";
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
      <Routes>
        {/* <h1>Counter {counter}</h1>
        <button onClick={()=> dispatch(increment(5))}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button> */}
        <button onClick={()=> dispatch(_getUsers())}> Test</button>

        {logedIn===true? 
          <Route path="/" element={<GamePage/>}/>
          :
          
        <Route path="LogInPage" element={<LogInPage/>}/>
        }
        
      </Routes>
  </div>
  );
}

export default App;
