// let theme="cyan"
// let color;

// if (theme==="dark"){
//     color="black";
// }
// else if(theme==="cyan"){
//     color="light blue";
// }
// else if(theme==="pink"){
//     color="pink";
// }
// else{
//     color="white"
// }
// console.log(color)


// let number = prompt("ente you number")
// console.log(number);
// if (number %5 ===0){
//     console.log("yes this is divisible by 5")
// }
// else{
//     console.log("nope, not divisible by 5")
// }

let score = prompt("enter yourr score(0-100)");
let grade ;

if (score>=90 && score<=100){
    grade = "A"
}
else if(score>=70 && score<=89){
    grade = "B"
}
else if(score>=60 && score<=69){
    grade = "C"
}
else if(score>=50 && score<=59){
    grade = "D"
}
else if(score<=49){
    grade = "F"
}
console.log("according to your score your grade is:",grade)