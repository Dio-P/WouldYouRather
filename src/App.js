import logo from './logo.svg';
import './App.css';
import {  useSelector, useDispatch } from "react-redux";
import {  increment, decrement } from "./Actions";
import LogInPage from './loginPage';
import {
  Route,
  Routes
} from "react-router-dom";


function App() {
  const counter = useSelector(state=> state.counter);
  const logedIn = useSelector(state=> state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>

      {logedIn===true? <h3>Valuable info I shouldn't see if not loged in</h3>: "Login box (chouse who you are)"}
    </div>
  );
}

export default App;
