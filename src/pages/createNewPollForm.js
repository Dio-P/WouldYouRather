import {useState} from "react"

const CreateQuestionForm =() => {

    const [optionOneText, setOptionOneText] = useState("");
    const [optionTwoTezt, setOptionTwoText] = useState("");

  const formSubmit = (event) => {
      event.preventDefault();

  }

    return(
        <div>
            <h1>Form for adding question</h1>
            <form onSubmit={formSubmit}> 
                <label>
                    Option One Text
                    <input type="text" value="textOptionOne"/>
                </label>
                <label>
                    Option Two Text
                    <input type="text" value="textOptionTwo"/>
                </label>
            </form>
        </div>
    )
}
export default CreateQuestionForm