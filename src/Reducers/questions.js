let questions =(state={}, action) => {
        switch(action.type){
            case "SENTQUESTIONS":
                return state;
                
            case "QUESTIONSTOSTATE":
              console.log("action", action)
              console.log("state", state) 

              return action.payload

            case "SAVENEWQUESTION":
              console.log("action after saving new q", action)
              console.log("state after saving new q", state) 
              return {
                ...state,
                [action.payload.id]: action.payload
              }
            
              default: {
                return state
              }

        }
    
}

export default questions;