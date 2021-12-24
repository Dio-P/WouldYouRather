import {  useSelector, useDispatch } from "react-redux";
import { getUsers, gettingUsers, login_id, giveUserDetails, signIn  } from "./Actions";
import Header from "./elements/header";

const GamePage = () => {
    return(
        <div>
            <Header/>
            <h1>Game Page</h1>
        </div>
    )
}

export default GamePage;