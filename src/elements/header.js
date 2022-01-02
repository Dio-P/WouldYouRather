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
            {/* have the previous action, of clicking on a name, changing the login status */}
            {/* now the previous step is done but the button does not rerender */}
            {/* have this button do different things */}
            {/* add the additional information we nead on the header */}
            {/* the login page should not have a header, 
            the header needs to be removed only on the game and other pages. 
            Or it could have, it does not really matter */}
        </div>
    )
}

export default connect(mapStateToProps)(Header);