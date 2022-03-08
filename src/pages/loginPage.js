import {  useSelector, useDispatch } from "react-redux";
import { login_id, signIn } from "../Actions";

const LogInPage= () => {

    let loginID="one"

    const users = useSelector(state=> state.getUsers)
    const dispatch = useDispatch();

    const login = (event) =>{
        event.preventDefault()
        loginID= event.target.value;
        dispatch(login_id(loginID))
        dispatch(signIn())
        localStorage.setItem("login_id",loginID);
        localStorage.setItem("logedIn",true);
    }


    return(
        <div>
            <h1>LogInPage</h1>
            <select name="userId" 
            onChange={(event)=>login(event)}>
                <option value="Please chouse login ID">Please choose a login ID</option>
                {Object.values(users).map(user=>(
                 <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
        </div>
    )
}

export default LogInPage;