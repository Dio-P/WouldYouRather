const CreateQuestionForm =() => {

    const textOptionOne = (event) =>{
        event.preventDefault();
        const optionOneText = event.target.value;
        console.log("optionOneText", optionOneText);
        return optionOneText;
    }

    const textOptionTwo = (event) => {
        event.preventDefault();
        const optionTwoText = event.target.value;
        console.log("optionTwoText", optionTwoText);
    }

    return(
        <div>
            <form>
                <input type="text" onChange={(event)=> textOptionOne}/>
                <input/>
            </form>
        </div>
    )
}
export default CreateQuestionForm