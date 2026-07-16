const COLOR_WIN = "#6b8e4e";
const COLOR_LOSE = "#a13d3d";
const COLOR_DRAW = "#b8863b";





let userScore = 0;
let compScore = 0;
let tieScore = 0;

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
const tieScorePara =document.querySelector("#tie-score")

const choices = document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")


const draw=()=>{
    console.log("the match is draw")
    msg.innerText="Game Was Draw \n Play Again🙄🙄"
    msg.style.background=COLOR_DRAW
    tieScore++
    tieScorePara.innerText=tieScore
}

let showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        // userwin==true bhi krr sake the no prblm
        console.log("User Win")
        msg.innerText=`You Win 😏😏\n Your ${userChoice} Beats ${compChoice}`
        msg.style.background=COLOR_WIN;
        userScore++
        userScorePara.innerText=userScore
        // userScore=userScorePara.innerText----
        // ye glt isliye cuz ye keh r hai ++ sai 1 hua js ka but html ka nahi 
        // aur fir ye keh ra hai userscore ko wohi krr  do jo html mai hai kyuki ye purane ko ocveride krra
    }else {
        console.log("Computer Win")
        msg.innerText=`You loose 🤣👅 \n ${compChoice} Beats Your ${userChoice}`
        msg.style.background=COLOR_LOSE
        compScore++
        compScorePara.innerText=compScore
    }
}
const resetBtn=document.querySelector(".reset")
    
const resetGame=()=>{
    msg.innerText="Play Your Move"
    msg.style.background="#5c5444"

    userScore = 0;
    compScore = 0;
    tieScore = 0;
    userScorePara.innerText=userScore
    compScorePara.innerText=compScore
    tieScorePara.innerText=tieScore
    // yha pehle userscore 0 kia fir innerhtml ko userscore kai equal  kia and bakio mai same
}

resetBtn.addEventListener("click",resetGame);

// for reset:Find element → define function → connect function with event listener



const playGame = (userChoice)=>{
    console.log("Your" ,userChoice);
    const compChoice = genCompchoice()
    console.log("Comp",compChoice);
    if(userChoice===compChoice){
        draw();
    }
    else{
        let userWin=true;
        if (userChoice==="rock"){
            // paper,scissor
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            // rock,scissor
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            // rock,paper
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}
// ek bug ye aya ki string mai Rock Paper Scissors hai aur upar condintion mai rock paper..
// hence rock != Rock
const genCompchoice=()=>{
    const options = ["rock","paper","scissors"];
    const randomIndx = Math.floor(Math.random()*3);
    return options[randomIndx]
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})
// "working"
// hamko hrr kaam kai liye alg fnx bnana chahiye jese---
// sbse pehle foreach wala choices kai choise pick krr ra---
// fir click pai userchoice attribute sai aur playgame----
// playgame mai apni choice from userchoice then comp choice from --
// getcomppchoice sai ab rules:agr user aur comp same toh draw() jisme draw ka console hai
// agr draw nahi toh ab ek var jo change hoye win ya loose pai
// wo change true ya false mai honge toh show winner fnx jisme true to win false to loos
// ab userscore aur compscore ko find krrke true mai userscore ko++ aur false mai compscore++
// ab user para aur choice ko = krna then bakio mai bhi same
// "working"

// return isliye kyuki iski value aage jake kaam aygi vrna undefined aati
// yaha userchoice () mai isliye laga cuz a wo alg scope ka hai to link krne kai liye (userchoise)