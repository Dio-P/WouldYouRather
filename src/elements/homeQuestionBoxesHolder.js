import {useState, useEffect} from "react"
// import "../style/allBoxes.css"
import QuestionBox from "./answeringQuestionBox"
import QuestionSample from "./questionSample"
import "../style/main.css"

const HomeBoxHolder = (props) => {

    const [displayState, setDisplayState] = useState(true);

    useEffect(()=>{
        console.log("displayState",displayState);
    }, [displayState])



    return(
        <div className="main_home_all_quest_holder">
            <div>
                <button className="main_button_style" onClick={()=> setDisplayState(true)}>Unasnwered Questions</button>
                <button className="main_button_style" onClick={()=> setDisplayState(false)}>Answered Questions</button>
            </div>
            {(displayState===false)?
            <div>
                {props.unansweredQuestions.map(question=>(
                <QuestionSample 
                question={question}
                questionId={props.questionId}/>
            ))}
            </div>
             :
            <div>
                {props.answeredQuestions.map(question=>(
                <QuestionSample question={question}
                questionId={props.questionId}/>
            ))}
            </div>
            }

            {/* two links or buttons with state. One for answered and one for ananswered questions map */}
            {/* if link one true, shop map one if not show map two */}
        </div>
    )
}

export default HomeBoxHolder