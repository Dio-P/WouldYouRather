import { AvatarGenerator } from 'random-avatar-generator';
 
const generator = new AvatarGenerator();

let users = (state={}, action)=>{
    switch(action.type){
        case "GETUSERS":
            return state;

          case "USERSTOSTATE":
            return action.payload

          case "UPDATEUSERCREATEDQUESTION":
            console.log("action after updating new q to user@@@@@@@@@@@@@@@@@", action)
            console.log("state after updating new q to user@@@@@@@@@@@@@@@@@", state) 
            return state= {
            ...state,
            [action.payload.auth]: {
            ...state[action.payload.auth],
            questions: state[action.payload.auth].questions.concat([action.payload.formattedQuestion.id])
          }
        }

          case "UPDATEUSERNEWANSWER":
            console.log("action after updating new a to user***************", action)
            console.log("state after updating new a to user***************", state) 
            
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