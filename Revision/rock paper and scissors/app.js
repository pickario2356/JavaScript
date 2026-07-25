const choices = document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.id

        const compChoice = getCompChoice()

        // console.log(userChoice)
        // console.log(compChoice)

        playGame(userChoice,compChoice)
    })
})
const getCompChoice =()=>{
    let options = ["rock","paper","scissors"]
    const compChoice = options[Math.floor(Math.random()*3)]
    return compChoice
}
function playGame(userChoice,compChoice){
    // console.log("user:",userChoice)
    // console.log("comp:",compChoice)

    if(userChoice===compChoice){
        draw()
    }
    else{
        let userWin;
        if(userChoice==="rock"){
            userWin = compChoice==="scissors"// this aslo gives true and false and this is short but it only gives true and false 
        // userWin = compChoice==="scissors"?true:false
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="rock"
        }
        else{
            userWin = compChoice==="paper"
        }
        showWinner(userWin,userChoice,compChoice)
    }
    
}

const userScorePara = document.querySelector("#user")
const compScorePara = document.querySelector("#comp")
const tieScorePara = document.querySelector("#tie")

let userScore=0
let compScore=0
let tieScore=0

const msg = document.querySelector(".msg")

const draw=()=>{
    tieScore++
    tieScorePara.innerHTML=tieScore
    msg.innerHTML="The Match Was Draw"
    msg.style.backgroundColor="dimGrey"
}
const showWinner =(userWIn,userChoice,compChoice)=>{
    if(userWIn){
        userScore++
        userScorePara.innerHTML=userScore
        msg.innerHTML=`Your ${userChoice} beats Comp ${compChoice}`
        msg.style.backgroundColor="cadetblue"
    }
    else{
        compScore++
        compScorePara.innerHTML=compScore
        msg.innerHTML=`Comp ${compChoice} Beats Your ${userChoice}`
        msg.style.backgroundColor="brown"
    }
}
const btn = document.querySelector(".reset")
btn.addEventListener("click",()=>{
    userScore=0
    userScorePara.innerHTML=userScore
    compScore=0
    compScorePara.innerHTML=compScore
    tieScore=0
    tieScorePara.innerHTML=tieScore

    msg.innerHTML="Play Again"
    msg.style.backgroundColor="#403D88"
})