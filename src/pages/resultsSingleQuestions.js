import { useEffect } from "react"
import {  useSelector } from "react-redux";
import "../style/main.css"
import Header from "../elements/header";
import PercentageBar from "../elements/percentageBar";


const SingleQResults = () => {
    const questionsData = useSelector(state=> state.getQuestions)
    const questionID = useSelector(state=> state.questionID)
    const users = useSelector(state=> state.getUsers)
    const loggedUserID = useSelector(state=> state.logID);

  
    const optionOneVotes=()=>{
        // console.log("option One votes length is: ", questionsData[questionID].optionOne.votes.length)
        return questionsData[questionID].optionOne.votes.length
    }

    const optionTwoVotes=()=>{
        // console.log("option two votes length is: ", questionsData[questionID].optionTwo.votes.length)
        return questionsData[questionID].optionTwo.votes.length
    }

    useEffect(()=>{
        console.log("!!!!!!!!!!!loggedUserID", loggedUserID[0]);
        console.log("!!!!!!!!!!!typeof", typeof loggedUserID[0]);
        console.log("!!!!!!!!!!!questionsData[questionID]", questionsData[questionID]);
        console.log("!!!!!!!!!!!votes", questionsData[questionID].optionOne.votes);
        console.log("!!!!!!!!!!!optionOne.votes", questionsData[questionID].optionOne.votes.includes(loggedUserID[0]));
        console.log("!!!!!!!!!!!optionTwo.votes", questionsData[questionID].optionTwo.votes.includes(loggedUserID[0]));
        optionOneVotes();
        optionTwoVotes();        

    }, [])
    
    return (
        <div>
            <Header/>
            <div className= "main_card_style answer_results_box">
                <h4>asked by: {users[questionsData[questionID].author].name} </h4>
                <h1>Results</h1>
                <div className="avatarHolder"> 
                    <img className="userAvatar" src={users[questionsData[questionID].author].avatarURL} alt="a random user avatar"/>
                </div>
                <div className={(questionsData[questionID].optionOne.votes.includes(loggedUserID[0]))? "userUnswer" :""}>
                    <h5> 1. {questionsData[questionID].optionOne.text}</h5>
                    <PercentageBar totalVotes={optionOneVotes() + optionTwoVotes()} questionVotes={optionOneVotes()}/>
                    <p>{optionOneVotes()} out of {optionOneVotes() + optionTwoVotes()} votes</p>

                </div>
                <div className={(questionsData[questionID].optionTwo.votes.includes(loggedUserID[0]))? "userUnswer" :""}>
                    <h5> 2. {questionsData[questionID].optionTwo.text}</h5>
                    <PercentageBar totalVotes={optionOneVotes() + optionTwoVotes()} questionVotes={optionTwoVotes()}/>
                    <p>{optionTwoVotes()} out of {optionOneVotes() + optionTwoVotes()} votes</p>

                </div>
            </div>
        </div>
    )
}

export default SingleQResults