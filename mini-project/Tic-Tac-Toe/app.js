let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

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
        }
        else{
            box.innerHTML="X";
            turnO = true;
        }
        box.disabled = true// learnt new thing abt box.disabled
        
        checkWinner()
    })
})

const checkWinner =()=>{
    for(pattern of winPattern){
        console.log(pattern);
        console.log(boxes[pattern[0]],boxes[pattern[1]],(boxes[pattern[2]]))

        // isme pehle pattern[0] solve krne sai 
    }
}