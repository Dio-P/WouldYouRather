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
                [action.payload.id]: formatQuestion(action.payload)
              }

            // case "SAVENEWANSWER":
            //   console.log("action after saving new answer", action)
            //   console.log("state after saving new answer", state) 
            //   return {
              //     ...state,
              // [state.action.payload.qid]: {
              //   ...state[state.action.payload.qid],
              //   [answer]: {
              //     ...state[state.action.payload.qid][state.action.payload.answer],
              //     votes: state[state.action.payload.qid][state.action.payload.answer].votes.concat([state.action.payload.authedUser])
              //   }
              // }
            //   }
            
              default: {
                return state
              }

        }
    
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export default questions;