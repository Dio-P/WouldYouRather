import {  useSelector, useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../Actions";
import "../style/header.css"

const mapStateToProps = state => { 
    return {
        logedOrNot: state.isLogged 
    }
}

const Header = () => {

    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)
    const logedOrNot = useSelector(state=> state.isLogged)
    const dispatch = useDispatch();



    return(
        <div id="header">
            {(logedOrNot===true)?  
            (<div> You are loged on as {users[partID].name} <button id="logOnOffBtn" onClick={()=>dispatch(signIn())}>Log Off</button> </div>)
            :
            <button id="logOnOffBtn">Log In</button>}
            <Link to="/home"><button className="main_button_style many_buttons_relation"> Home </button></Link>
           <Link to="/leaderboard"><button className="main_button_style many_buttons_relation"> LeaderBoard </button></Link> 
           <Link to="/add"><button className="main_button_style many_buttons_relation"> Add Question </button></Link>
        </div>
    )
}

export default connect(mapStateToProps)(Header);