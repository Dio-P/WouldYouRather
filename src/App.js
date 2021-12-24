import logo from './logo.svg';
import './App.css';
import {  useSelector, useDispatch, connect } from "react-redux";
import { _getUsers, gettingUsers } from "./Actions";
import LogInPage from './loginPage';
import GamePage from './Game';
import {
  Route,
  Routes,
  Router
} from "react-router-dom";

const mapStateToProps = state => { 
  return {
      logedOrNot: state.isLogged 
  }
}


function App() {
  const counter = useSelector(state=> state.counter);
  const logedIn = useSelector(state=> state.isLogged);
  const users = useSelector(state=> state.getUsers)
  const dispatch = useDispatch();
  

  return (
    <div className="App">
      
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

export default connect(mapStateToProps)(App);
