import React, { useState, useEffect } from 'react';

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
    const stateUserId = useSelector(state=> state.logID)
    const localStUserId = localStorage.getItem("login_id");
    const gettingTheId = () => (stateUserId.length>0)? stateUserId: localStUserId;
    const partID = gettingTheId()
    const stateLogedOrNot = useSelector(state=> state.isLogged);
    const localStLoggedOrNot = localStorage.getItem("logedIn");
    const logedOrNot = () => { return stateLogedOrNot? stateLogedOrNot: localStLoggedOrNot }
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("usersHeader", users);
        console.log("users[partID]Header", users[partID].name);
        console.log("localStUserIdHeader", localStUserId);
        console.log("partIDHeader", partID);
    }, []);

    const handleLogOff = () => {
        dispatch(signIn());
        localStorage.clear();
    }

    return(
        <div id="header">
            {/* {(logedOrNot())?
            (<div> You are loged on as {users[partID].name} <button id="logOnOffBtn" onClick={handleLogOff}>Log Off</button> </div>)
            :
            <button id="logOnOffBtn">Log In</button>} */}
            <Link to="/home"><button className="main_button_style many_buttons_relation"> Home </button></Link>
           <Link to="/leaderboard"><button className="main_button_style many_buttons_relation"> LeaderBoard </button></Link> 
           <Link to="/add"><button className="main_button_style many_buttons_relation"> Add Question </button></Link>
        </div>
    )
}

export default connect(mapStateToProps)(Header);