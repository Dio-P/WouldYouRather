import {useState, useEffect} from "react"
import "../style/allBoxes.css"
import QuestionBox from "./answeringQuestionBox"
import QuestionSample from "./questionSample"

const HomeBoxHolder = (props) => {

    const [displayState, setDisplayState] = useState(false)

    useEffect(()=>{
        console.log("displayState",displayState);
    }, [displayState])



    return(
        <div className="box">
            <div>
                <button onClick={()=> setDisplayState(true)}>Unasnwered Questions</button>
                <button onClick={()=> setDisplayState(false)}>Answered Questions</button>
            </div>
            {(displayState===false)?
            <div>
                {props.unansweredQuestions.map(question=>(
                <QuestionSample 
                question={question}
                questionId={(questionID)=> props.setQuestionId(questionID)}/>
            ))}
            </div>
             :
            <div>
                {props.answeredQuestions.map(question=>(
                <QuestionSample question={question}/>
            ))}
            </div>
            }

            {/* two links or buttons with state. One for answered and one for ananswered questions map */}
            {/* if link one true, shop map one if not show map two */}
        </div>
    )
}

export default HomeBoxHolder