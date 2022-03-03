import {useState, useEffect} from "react"
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
            {(displayState===true)?
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

        </div>
    )
}

export default HomeBoxHolder