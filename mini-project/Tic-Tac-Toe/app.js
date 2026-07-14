let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector(".win");
let newGameBtn = document.querySelector(".new-btn")

let turnO = true;

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerHTML="O";
            turnO = false;
            box.classList.add("forO");
            box.classList.remove("forx")
        }
        else{
            box.innerHTML="X";
            turnO = true;
            box.classList.add("forx");
            box.classList.remove("forO")
        }
        count++;
        console.log(count)
        box.disabled = true// learnt new thing abt box.disabled
        
        checkWinner()
    })
})
const resetGame =()=>{
    turnO = false;
    enableBtn();
    msgCont.classList.add("hide");
    count = 0;
    winnerFound = false
}
const disableBtn = ()=>{
    for(box of boxes){
        box.disabled = true
    }
}

const enableBtn = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerHTML=""
    }
}

let showWinner= (winner)=>{
    msg.innerText = `Congratulation The Winner Is : ${winner}`;
    msgCont.classList.remove("hide")
}

let showDraw= ()=>{
    msg.innerText="The Winner Is None so: Draw";
    msgCont.classList.remove("hide")
}

let count = 0;

let winnerFound = false
const checkWinner =()=>{
    for(pattern of winPattern){
        let postval1 = boxes[pattern[0]].innerHTML
        let postval2 = boxes[pattern[1]].innerHTML
        let postval3 = boxes[pattern[2]].innerHTML// isme pehle pattern[0] solve krne sai fir jo ayege wo indx bnega boxese ka
    
        if(postval1 != "" && 
           postval2 != "" && 
           postval3 != ""){
            // if(postval1 === postval2 === postval3){
            // Iska result true ya false aata hai, fir us boolean ko postval3 se compare karta hai.isliye niche wala sahi hai
            if(postval1 === postval2 && postval2=== postval3){
                console.log("winner",postval1)
                // postval 1 2 aur 3 tino hi box kai inner html ki vallue store krte hai jo aate hai X ya O click krne sai fir jese box[2].innerhtml isme box[2] jo bhi ho uski innerhtml ajajayega if dubara confuse hou to for each sai yah tk pdhu
                showWinner(postval1);
                winnerFound = true
                disableBtn()
            }
    }
    if(count===9 && winnerFound===false){
            showDraw()
        }
    }
}
// yaha if for kai nicher isliye hai kyuki abb saare check krne kai baad btayega ki draw hai ya nhi 
// vrna agr mai isko if kai niche rkhta toh wo ek hi pattern sai match krne kai baad draw bolta baki nhi krta

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)