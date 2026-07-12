// for

// for(let i = 1; i <= 100 ; i=i+1){
//     console.log("All Hail Aegon")
// }
// console.log("loop is ended");

// for(let i = 1; i <= 12 ; i=i+1){
//     console.log("i=",i)
// }
// console.log("loop is ended");

// let sum = 0;
// let n = prompt("enter your digit")
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log("your sum is:",sum)


// while
// let i=1
// while(i<=10){
//     console.log(i);
//     i++;
// }


// do while
// let i=1
// let n=prompt("number")
// do{
//     console.log("i=",i);
//     i++;
// }while(i<=n)


// for of 
// let str = "KRATOS";
// let size=0;

// for(let i of str ){
//     console.log(i);
//     size++
    
// }
// console.log("size=",size)


// for in// gives key
let student = {
    name:"raghav",
    class:1.2,
    ispass:false,
    cgpa:9
};
for (let key in student){
    console.log("key:",key,"and value",student[key])
    
}    
