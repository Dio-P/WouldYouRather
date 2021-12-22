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
            {/* have the previous action, of clicking on a name, changing the login status */}
            {/* have this button do different things */}
            {/* add the additional information we nead on the header */}
        </div>
    )
}

export default Header