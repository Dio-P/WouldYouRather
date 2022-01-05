let questions =(state={}, action) => {
        switch(action.type){
            case "SENTQUESTIONS":
                return state;
                
            case "QUESTIONSTOSTATE":
              console.log("action", action)
              console.log("state", state) 

              return action.payload
              default: {
                return state
              }

        }
    
}

export default questions;