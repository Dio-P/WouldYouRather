const logID=(state="one", action)=> {
    switch(action.type){
        case "GIV_LOG_DETAILS":
            return state
            
        case "LOGIN_AS":
            console.log("action", action)
            console.log("state", state) 
        return action.payload
        // I was asking it to take string and produce object
        default: {
            return state
        }
    }
}

export default logID