import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import logID from "./loginId";


const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    getUsers: users,
    getQuestions: questions,
    logID: logID,



})

export default allReducers