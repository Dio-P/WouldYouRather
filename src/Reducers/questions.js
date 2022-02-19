let questions =(state={}, action) => {
        switch(action.type){
            case "SENTQUESTIONS":
                return state;
                
            case "QUESTIONSTOSTATE":
              console.log("action", action)
              console.log("state", state) 

              return action.payload

            case "SAVENEWQUESTION":
              console.log("action after saving new q @@@@@@@@@@@@@@@@@", action)
              console.log("state after saving new q @@@@@@@@@@@@@@@@@", state) 
              
              return {
                ...state,
                [action.payload.id]: action.payload
              }

            case "SAVENEWANSWER":
              console.log("action after saving new answer********************", action)
              console.log("state after saving new answer********************", state) 
              return {
                    ...state,
                [state.action.payload.qid]: {
                  ...state[state.action.payload.qid],
                  [state.action.payload.answer]: {
                    ...state[state.action.payload.qid][state.action.payload.answer],
                    votes: state[state.action.payload.qid][state.action.payload.answer].votes.concat([state.action.payload.authedUser])
                  }
                }
              }
            
              default: {
                return state
              }

        }
    
}



export default questions;