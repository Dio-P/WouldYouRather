const loading = (state= true, action) => {
    switch(action.type){
        case "USERSTOSTATE":
            return false;
            default: {
                return state;
            }
    }

}

export default loading