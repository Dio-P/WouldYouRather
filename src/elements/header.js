import React, {useState, useEffect} from "react"
import {  useSelector, useDispatch, connect } from "react-redux";
import { signIn } from "../Actions";
import "../style/header.css"
const mapStateToProps = state => { 
    return {
        logedOrNot: state.isLogged 
    }
}


const Header = (props) => {

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
            <button> LeaderBoard </button>
        </div>
    )
}

export default connect(mapStateToProps)(Header);