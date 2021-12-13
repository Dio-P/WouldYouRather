import logo from './logo.svg';
import './App.css';
import {  useSelector } from "react-redux"

function App() {
  const counter = useSelector(state=> state.counter);

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button>+</button>
      <button>-</button>

      <h3>Valuable indo I should see if not loged in</h3>
    </div>
  );
}

export default App;
