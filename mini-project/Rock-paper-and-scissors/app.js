let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")

const draw=()=>{
    console.log("the match is draw")
    msg.innerText="Game Was Draw Play Again🙄🙄"
}

let showWinner=(userWIn)=>{
    if (userWIn==true){
        // userwin==true bhi krr sake the no prblm
        console.log("User Win")
        msg.innerText="You Win 😏😏"
    }
    else if(userWIn==false){
        console.log("Computer Win")
        msg.innerText="You loose 🤣🤣"
    }
}

const playGame = (userChoice)=>{
    console.log("Yoou Choose" ,userChoice);
    const compChoice = genCompchoice()
    console.log("Computer Choose",compChoice);
    if(userChoice===compChoice){
        draw()
    }
    else{
        let userWin=true;
        if (userChoice==="rock"){
            // paper,scissor
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            // rock,scissor
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            // rock,paper
            userWIn = compChoice==="rock"?false:true;
        }
        showWinner(userWin)
    }
}

const genCompchoice=()=>{
    const options = ["Rock","Paper","Scissors"];
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
// "working"

// return isliye kyuki iski value aage jake kaam aygi vrna undefined aati
// yaha userchoice () mai isliye laga cuz a wo alg scope ka hai to link krne kai liye (userchoise)