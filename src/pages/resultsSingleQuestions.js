import { useEffect, useCallback} from "react"
import {  useSelector, useDispatch } from "react-redux";
// import "../style/allBoxes.css";
import "../style/main.css"
import Header from "../elements/header";


const SingleQResults = () => {
    const questionsData = useSelector(state=> state.getQuestions)
    const questionID = useSelector(state=> state.questionID)
    const users = useSelector(state=> state.getUsers)

  

    const optionOneVotes=()=>{
        console.log("option One voret length is: ", questionsData[questionID].optionOne.votes.length)
        return questionsData[questionID].optionOne.votes.length

    }

    const optionTwoVotes=()=>{
        console.log("option two votes length is: ", questionsData[questionID].optionTwo.votes.length)
        return questionsData[questionID].optionTwo.votes.length

    }

    useEffect(()=>{
        optionOneVotes();
        optionTwoVotes();
        

    }, [])

    // const totalVotes = useCallback(()=>{
    //     const totalVotes = optionOneVotes() + optionTwoVotes();
    //     console.log("total votes are: ", totalVotes);

    // }, [optionOneVotes, optionTwoVotes])

    // const calculateTotalVotes = useCallback(()=>{
    //     const totalVotes = optionOneVotes() + optionTwoVotes()

    // }, [optionOneVotes, optionTwoVotes])
    
    return (
        <div>
            <Header/>
            <div class= "main_card_style">
                <h4>asked by: {users[questionsData[questionID].author].name} </h4>
                <h1>Results</h1>
                <div className="avatarHolder"> 
                    <img id="userAvatar" src={users[questionsData[questionID].author].avatarURL} alt="a random user avatar"/>
                </div>
                {/* you need an active class to be telling you what your answer is */}
                <div>
                    <h5>{questionsData[questionID].optionOne.text}</h5>
                    <p>results stats</p>
                    <p>{optionOneVotes()} out of {optionOneVotes() + optionTwoVotes()} votes</p>

                </div>
                <div>
                    <h5>{questionsData[questionID].optionTwo.text}</h5>
                    <p>result stats</p>
                    <p>{optionTwoVotes()} out of {optionOneVotes() + optionTwoVotes()} votes</p>

                </div>
            </div>
        </div>
    )
}

export default SingleQResults