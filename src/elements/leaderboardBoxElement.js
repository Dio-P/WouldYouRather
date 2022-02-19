import { useEffect } from "react";
import {  useSelector, useDispatch } from "react-redux";
import "../style/main.css";


const LeaderBox = (props) => {
    const questionsData = useSelector(state=> state.getQuestions)
    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)

    useEffect(()=>{
        console.log("users are!@#$%&*&^%$#@!^#%@$#^$*@", users);

    }, [])

    // const countingScore = () => {
    //     let questions = Object.values(questionsData);
    //     let allUsers = Object.values(users);
    //     let score = 0
    //     for(user of allUsers){
    //         console.log("user", user)
    //         for(question of questions){
    //             if(question.author === user){
    //                 score +=1;
    //                 console.log("score1",score);
    //             }
    //             else if(question.optionOne.votes.includes(user)){
    //                 score +=1;
    //                 console.log("score2",score);
    //             }
    //             else if(question.optionTwo.votes.includes(user)){
    //                 score +=1;
    //                 console.log("score3",score);
    //             }
    //         }
    //     }
    // }


    return (
        <div class="box">
            <div class="avatarHolder"> 
                <img id="userAvatar" src={users[props.user.id].avatarURL} alt="a random user avatar"/>
            </div>
            <div>
                <h1>User Name {props.user.name}</h1>
            
            <div>
                <h3>Answered Questions: </h3>
                <h3>Created Questions: </h3>
            </div>
            </div>
            <div id="scoreHolder">
                <div> Score</div>
            </div>


        </div>
    )
}

export default LeaderBox