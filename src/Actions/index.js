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

export const usersInState =(users) =>{
    return{
        type: "USERSTOSTATE", 
        payload: users
    }
}

export const gettingQuestions = () => {
    return{
        type: "GETQUESTIONS"
    }
}

export const questionsInState = (questions) => {
    return{
        type: "QUESTIONSTOSTATE",
        payload: questions
    }
}

export const savingNewQuestion = (newQuestion) => {
    return{
        type: "SAVENEWQUESTION",
        payload: newQuestion
    }
}

// export const updatingNewQuestionUserCreated = (newUserQuestionData) => {
//     return{
//         type: "UPDATEUSERCREATEDQUESTION",
//         payload: newUserQuestionData
//     }
// }


// export const saveNewAnswer = (newAnswer) => {
//     return{
//         type: "SAVENEWANSWER",
//         payload: newAnswer
//     }
    
// }

// export const saveUserNewAnswer = (userNewAnswer) => {
//     return{
//         type: "UPDATEUSERNEWANSWER",
//         payload: userNewAnswer
//     }
    
// }

export const giveUserDetails = () => {
    return{
        type: "GIV_LOG_DETAILS"
    }
}

export const QIDtoState = (signleQuestionID) =>{
    return{
        type: "SINGLEQIDTOSTATE",
        payload: signleQuestionID
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