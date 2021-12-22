import {  useSelector, useDispatch } from "react-redux";
import { getUsers, gettingUsers, login_id, giveUserDetails,  } from "./Actions";

const LogInPage= () => {

    let loginID="one"

    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)
    const dispatch = useDispatch();

    const login = (event) =>{
        event.preventDefault()
        loginID= event.target.value;
        console.log("loginID", loginID)
        dispatch(login_id(loginID))


    }

    return(
        <div>
            <button onClick={()=> dispatch(gettingUsers())}> Test</button>
            <button onClick={()=> dispatch(login_id(Login_Id))}> UserDetTest</button>
            <h1>Users {JSON.stringify(Object.values(users)[0].name)}</h1>
            <h2> particular Id : {partID}</h2>
            <h1>LogInPage</h1>
            <select name="userId" 
            onChange={(event)=>login(event)}>
                {Object.values(users).map(user=>(
                 <option value={user.name}>{user.name}</option>
                ))}
            </select>
        </div>
    )
}

export default LogInPage;