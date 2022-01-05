import {
    _saveQuestionAnswer,
    _saveQuestion,
    _getQuestions,
    _getUsers} from "../_DATA"


   export const getInitQuestions= async()=> {
        return await _getQuestions().then(questionsData=>{
            const questions = questionsData;
            console.log("questionsFromApi", questions);
            return questions
        })
    }

    export const getInitUsers = async() => {
        return await _getUsers().then(usersData=>{
            const users = usersData;
            console.log("usersFromApi", users)
            return users
        })
    }

    // export const saveAQuestion = (question) => {
    //     _saveQuestion(question)
    // }