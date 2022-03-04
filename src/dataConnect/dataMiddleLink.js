import { _getQuestions,_getUsers } from "../_DATA"


   export const getInitQuestions= async()=> {
        return await _getQuestions().then(questionsData=>{
            const questions = questionsData;
            return questions
        })
    }

    export const getInitUsers = async() => {
        return await _getUsers().then(usersData=>{
            const users = usersData;
            return users
        })
    }