import {useState, useEffect} from "react";
import {  useSelector, useDispatch } from "react-redux";
import "../style/allBoxes.css"

const CreateQuestionForm =() => {

    const [optionOneText, setOptionOneText] = useState("");
    const [optionTwoText, setOptionTwoText] = useState("");

    const questions = useSelector(state=> state.getQuestions)
    const questionID = useSelector(state=> state.questionID)
    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)
    const auth = users[partID].name


    // useEffect(()=>{
    //     formatQuestion(optionOneText, optionTwoText, users[partID].name);
    //     console.log("formatQuestion is: ", formatQuestion())
        
    // }, [optionOneText, optionTwoText])

  const formSubmit = () => {
        // event.preventDefault();
        // const res = formatQuestion(optionOneText, optionTwoText, auth)
        // .then(question=>{
          _saveQuestion (formatQuestion(optionOneText, optionTwoText, auth));
          console.log("_saveQuestion", formatQuestion(optionOneText, optionTwoText, auth))
        // })
        console.log("formatQuestion is: ", formatQuestion(optionOneText, optionTwoText, auth))
        console.log("optionOneText", optionOneText);
        console.log("optionTwoText", optionTwoText);
        // console.log("typeof optionOneText", typeof optionOneText);
        // console.log(" typeof optionTwoText", typeof optionTwoText);
        // setOptionOneText(optionOneText);
        // setOptionTwoText(optionTwoText);
          
      
    //   use the exported function to save the new question.
  }

  const formatQuestion = (optionOneText, optionTwoText, author) =>{
      console.log("optionOneText from within the for Quest action", optionOneText)
      console.log("optionTwoText from within the for Quest action", optionTwoText)

    return {
      id: generateUID(),
      timestamp: Date.now(),
      author,
      optionOne: {
        votes: [],
        text: optionOneText,
      },
      optionTwo: {
        votes: [],
        text: optionTwoText,
      }
    }
  }

  // function _saveQuestion (question) {
  //   return new Promise((res, rej) => {
  //     const authedUser = question.author;
  //     const formattedQuestion = formatQuestion(question);
  
  //     setTimeout(() => {
  //       questions = {
  //         ...questions,
  //         [formattedQuestion.id]: formattedQuestion
  //       }
        
  //       users = {
  //         ...users,
  //         [authedUser]: {
  //           ...users[authedUser],
  //           questions: users[authedUser].questions.concat([formattedQuestion.id])
  //         }
  //       }
  
  //       res(formattedQuestion)
  //     }, 1000)
  //   })
  // }

  function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
//   function formatQuestion ( optionOneText, optionTwoText, author ) {
//     return {
//       id: generateUID(),
//       timestamp: Date.now(),
//       author,
//       optionOne: {
//         votes: [],
//         text: optionOneText,
//       },
//       optionTwo: {
//         votes: [],
//         text: optionTwoText,
//       }
//     }
//   }

    return(
        <div>
            <h1>Form for adding question</h1>
            <div className="box" >
                <label>
                    Option One Text
                    <input type="text" name="opt1" value={optionOneText} onChange={event=>setOptionOneText(event.target.value)}/>
                </label>
                <label>
                    Option Two Text
                    <input type="text" name="opt2" value={optionTwoText} onChange={event=>setOptionTwoText(event.target.value)}/>
                </label>
                <button type="submit" value="submit" onClick={ formSubmit}>Answer</button>
            </div>
        </div>
    )
}
export default CreateQuestionForm