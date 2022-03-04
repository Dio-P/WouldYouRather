let users = (state={}, action)=>{
    switch(action.type){
        case "GETUSERS":
            return state;

          case "USERSTOSTATE":
            return action.payload

          case "UPDATEUSERCREATEDQUESTION":
            return state= {
            ...state,
            [action.payload.auth]: {
            ...state[action.payload.auth],
            questions: state[action.payload.auth].questions.concat([action.payload.formattedQuestion.id])
          }
        }

          case "UPDATEUSERNEWANSWER":
          return state= {
            ...state,
            [action.payload.authedUser]: {
              ...state[action.payload.authedUser],
              answers: {
                ...state[action.payload.authedUser].answers,
                [action.payload.qid]: action.payload.answer
            }
          }
        }

            default: {
                return state;
            }
    }
    
  }

  export default users;