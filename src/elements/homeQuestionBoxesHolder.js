import { useState } from "react"
import QuestionSample from "./questionSample"
import "../style/main.css"

const HomeBoxHolder = ({ unansweredQuestions, answeredQuestions }) => {

    const [displayState, setDisplayState] = useState(true);

    return(
        <div className="main_home_all_quest_holder">
            <div>
                <button className="main_button_style" onClick={()=> setDisplayState(true)}>Unasnwered Questions</button>
                <button className="main_button_style" onClick={()=> setDisplayState(false)}>Answered Questions</button>
            </div>
            {(displayState===true)?
            <div>
                {unansweredQuestions.map(question=>(
                <QuestionSample key={question.id} 
                question={question}/>
            ))}
            </div>
             :
            <div>
                {answeredQuestions.map(question=>(
                <QuestionSample question={question}
                key={question.id}/>
            ))}
            </div>
            }

        </div>
    )
}

export default HomeBoxHolder