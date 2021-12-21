const logID=(state, action)=> {
    switch(action.type){
        case "LOGIN_AS": 
        return {
            ...state,
            Login_Id : action.Login_Id
        }
        default: {
            return state
        }
    }
    
   

}