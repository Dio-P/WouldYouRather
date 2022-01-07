import { AvatarGenerator } from 'random-avatar-generator';
 
const generator = new AvatarGenerator();

let users = (state={}, action)=>{
    switch(action.type){
        case "GETUSERS":
            return state;

          case "USERSTOSTATE":
            return action.payload

            default: {
                return state;
            }
    }
    
  }

  export default users;