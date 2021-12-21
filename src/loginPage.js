import {  useSelector, useDispatch } from "react-redux";
import { _getUsers, gettingUsers, login_id } from "./Actions";

const LogInPage= () => {

    const users = useSelector(state=> state.getUsers)
    const dispatch = useDispatch();

    const login = (event) =>{
        event.preventDefault()
        let loginID= event.target.value;
        console.log("loginID", loginID)
        login_id(loginID)


    }

    return(
        <div>
            <button onClick={()=> dispatch(gettingUsers())}> Test</button>
            <h1>Users {JSON.stringify(Object.values(users)[0].name)}</h1>
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