import { useSelector } from "react-redux";
import QuestionBox from "../elements/answeringQuestionBox"
import Header from "../elements/header";
import "../style/main.css"

const SinglePageQuestion = () => {
    const questionID = useSelector(state=> state.questionID)

    return(
        <div>
            <Header/>
            <QuestionBox question={questionID}/>
        </div>
    )
}

export default SinglePageQuestion