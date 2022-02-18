import { AvatarGenerator } from 'random-avatar-generator';
 
const generator = new AvatarGenerator();

let users = (state={}, action)=>{
    switch(action.type){
        case "GETUSERS":
            return state;

          case "USERSTOSTATE":
            return action.payload

        //   case "UPDATEUSERCREATEDQUESTION":
        //     return state= {
        //     ...state,
        //   [action.payload.authedUser]: {
        //     ...state[action.payload.authedUser],
        //     questions: users[action.payload.authedUser].questions.concat([action.payload.formattedQuestion.id])
        //   }
        // }

        //   case "UPDATEUSERNEWANSWER":
    //     return state= {
        //   ...users,
        //   [action.payload.authedUser]: {
        //     ...users[action.payload.authedUser],
        //     answers: {
        //       ...users[action.payload.authedUser].answers,
        //       [action.payload.qid]: answer
        //     }
        //   }
        // }

            default: {
                return state;
            }
    }
    
  }

  export default users;