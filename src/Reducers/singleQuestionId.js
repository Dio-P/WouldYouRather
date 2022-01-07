const singleQuestionID =(state="", action) => {
    switch(action.type){
        case "SINGLEQIDTOSTATE":
            return action.payload;
            default: {return state}
    }
}

export default singleQuestionID