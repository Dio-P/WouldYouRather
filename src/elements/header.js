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
            {/* now the previous step is done but the button does not rerender */}
            {/* have this button do different things */}
            {/* add the additional information we nead on the header */}
            {/* the login page should not have a header, 
            the header needs to be removed only on the game and other pages. 
            Or it could have, it does not really matter */}
        </div>
    )
}

export default Header