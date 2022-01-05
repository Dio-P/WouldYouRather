import {
    _saveQuestionAnswer,
    _saveQuestion,
    _getQuestions,
    _getUsers} from "./_DATA"


   export const getInitQuestions=()=> {
        _getQuestions().then(questionsData=>{
            const questions = questionsData;
            console.log("questionsFromApi", questions);
            return questions
        })
    }

    export const getInitUsers = () => {
        _getUsers().then(usersData=>{
            const users = usersData;
            console.log("usersFromApi", users)
            return users
        }

        )
    }

    // export const saveAQuestion = (question) => {
    //     _saveQuestion(question)
    // }