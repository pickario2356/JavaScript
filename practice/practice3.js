// let i=0;
// for(i;i<=100;i=i+2){
//     console.log(i)
// }

// let i=0
// while(i<=100){
//     console.log(i);
//     i=i+2
// }

// let i = 0
// for(i;i<=100;i++){
//     if(i %2 === 0){
//     console.log(i)
//     }
// }

let gameNum = 67;
let num = prompt("guess the number")

while(num!=gameNum){
    num = prompt("guess again")
}
// yaha != ka mtlb same nahi toh loop chalo aur agr == krta jo glt hota to wo keta same aye to loop chalao

console.log("congratulation u guessd the num")