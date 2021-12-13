import logo from './logo.svg';
import './App.css';
import {  useSelector, useDispatch } from "react-redux";
import {  increment } from "./Actions";


function App() {
  const counter = useSelector(state=> state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button>-</button>

      <h3>Valuable indo I should see if not loged in</h3>
    </div>
  );
}

export default App;
