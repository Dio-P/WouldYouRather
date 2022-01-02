import {  useSelector, useDispatch } from "react-redux";


const QuestionBox = () => {

    const questionsData = useSelector(state=> state.getQuestions)

    const returningAnswer = (event) => {
        event.preventDefault()
        const returnedA = event.target.value;
        console.log("returnedA", returnedA);
        return returnedA
    }

    return(
        <div>
            <fieldset onChange={(event)=> returningAnswer(event)}>
                <div>
                <input type= "checkbox" id="a1" name="a1" value="optionOne"/>
                <label for="a1">{JSON.stringify(Object.values(questionsData)[0].optionOne.text)}</label>
                </div>
                <div>
                <input type= "checkbox" id="a2" name="a2" value="optionTwo"/>
                <label>{JSON.stringify(Object.values(questionsData)[0].optionTwo.text)}</label>
                </div>
            </fieldset>
        </div>
    )
}

export default QuestionBox