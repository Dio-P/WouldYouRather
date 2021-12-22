const logID=(state="", action)=> {
    switch(action.type){
        case "GIV_LOG_DETAILS":
            return {
                state
            }
        case "LOGIN_AS": 
        return {
            ...state,
            Login_Id : [...state, action.Login_Id]
        }
        default: {
            return state
        }
    }
}

export default logID