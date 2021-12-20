import {  useSelector, useDispatch } from "react-redux";
import { _getUsers, gettingUsers } from "./Actions";

const LogInPage= () => {

    const users = useSelector(state=> state.getUsers)
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=> dispatch(gettingUsers())}> Test</button>
            <h1>Users {JSON.stringify(Object.values(users)[0].name)}</h1>
            <h1>LogInPage</h1>
            {/* <select name="userId" > */}
            <p>This:{users.name}</p>
                {/* {users.map(user=>(<p>{JSON.stringify(user.name)}</p> */}
                 {/* <option value={user.name}>{user.name}</option> */}
                {/* ))} */}
            {/* </select> */}
        </div>
    )
}

export default LogInPage;