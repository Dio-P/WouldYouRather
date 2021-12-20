import logo from './logo.svg';
import './App.css';
import {  useSelector, useDispatch } from "react-redux";
import {  increment, decrement, _getUsers, gettingUsers } from "./Actions";
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
  const users = useSelector(state=> state.getUsers)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={()=> dispatch(gettingUsers())}> Test</button>
      <h1>Users {JSON.stringify(users)}</h1>
      <Routes>
        {/* <h1>Counter {counter}</h1>
        <button onClick={()=> dispatch(increment(5))}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button> */}
        

        {logedIn===true? 
          <Route path="/" element={<GamePage/>}/>
          :
          
        <Route path="/" element={<LogInPage/>}/>
        }
        
      </Routes>
  </div>
  );
}

export default App;
