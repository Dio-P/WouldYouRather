// export const increment = (nr) => {
//     return{
//         type: "INCREMENT",
//         payload : nr
//     }
// }

// export const decrement = () => {
//     return{
//         type: "DECREMENT"
//     }
// }
//////////////////////////////////////////
// export function _getUsers () {
//     return new Promise((res, rej) => {
//       setTimeout(() => res({...users}), 1000)
//       console.log("res_getUsers", res)
//     })
//   }

export const gettingUsers = () => {
    return{
        type: "GETUSERS"
    }
}

export const usersInState =() =>{
    return{
        type: "USERSTOSTATE"
    }
}

export const gettingQuestions = () => {
    return{
        type: "GETQUESTIONS"
    }
}

export const questionsInState = () => {
    return{
        type: "QUESTIONSTOSTATE"
    }
}

export const giveUserDetails = () => {
    return{
        type: "GIV_LOG_DETAILS"
    }
}

export const login_id = (Login_Id) => {
    return{
        type: "LOGIN_AS",
        payload: Login_Id
    }
}

export const signIn = ()=> {
    return{
        type: "SIGN_IN"
    }
}