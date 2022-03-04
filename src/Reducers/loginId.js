const logID=(state=[], action)=> {
    switch(action.type){
        case "GIV_LOG_DETAILS":
            return state
            
        case "LOGIN_AS":
            console.log("action", action)
            console.log("state", state) 
        return [action.payload]
        
        default: {
            return state
        }
    }
}

export default logID