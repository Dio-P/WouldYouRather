import {useState} from "react"
import "../style/allBoxes.css"

const CreateQuestionForm =() => {

    const [optionOneText, setOptionOneText] = useState("");
    const [optionTwoText, setOptionTwoText] = useState("");

  const formSubmit = (event) => {
      event.preventDefault();
      console.log("optionOneText", optionOneText);
      console.log("optionTwoText", optionTwoText);
    //   use the exported function to save the new question.

  }

    return(
        <div>
            <h1>Form for adding question</h1>
            <form className="box" onSubmit={formSubmit}>
                <label>
                    Option One Text
                    <input type="text" value={optionOneText} onChange={event=>setOptionOneText(event.target.value)}/>
                </label>
                <label>
                    Option Two Text
                    <input type="text" value={optionTwoText} onChange={event=>setOptionTwoText(event.target.value)}/>
                </label>
                <button type="submit" value="submit">Answer</button>
            </form>
        </div>
    )
}
export default CreateQuestionForm