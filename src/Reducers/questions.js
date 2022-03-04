let questions =(state={}, action) => {
        switch(action.type){
            case "SENTQUESTIONS":
                return state;
                
            case "QUESTIONSTOSTATE":
              return action.payload

            case "SAVENEWQUESTION":
              return {
                ...state,
                [action.payload.id]: action.payload
              }

            case "SAVENEWANSWER":
              return state = {
                    ...state,
                [action.payload.qid]: {
                  ...state[action.payload.qid],
                  [action.payload.answer]: {
                    ...state[action.payload.qid][action.payload.answer],
                    votes: state[action.payload.qid][action.payload.answer].votes.concat(action.payload.authedUser)
                  }
                }
              }
            
            
              default: {
                return state
              }

        }
    
}



export default questions;