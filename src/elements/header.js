import {  useSelector, useDispatch } from "react-redux";
import "../style/header.css"

const Header = () => {

    const logedOrNot = useSelector(state=> state.isLogged)

    return(
        <div id="header">
            {(logedOrNot==="true")?  
            <button id="logOnOffBtn">Log Off</button>
            :
            <button id="logOnOffBtn">Log In</button>}            
        </div>
    )
}

export default Header