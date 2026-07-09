// function countVowels(str){
//     let count = 0
//     for(const char of str ){
//         if(
//             char ==="a" ||
//             char ==="e" || 
//             char ==="i" ||
//             char ==="o" ||
//             char ==="u" 
//             )   {
//                count++  
//             }
       
//     };
//     console.log(count);
//     return count;
// }
// countVowels("Pickario")


// const countvow = (str) =>{
//     let count = 0
//       for(const char of str ){
//         if(
//             char ==="a" ||
//             char ==="e" || 
//             char ==="i" ||
//             char ==="o" ||
//             char ==="u" )   {
//                 count++  }
//     };
//     console.log(count);
//     return count;
// }
// countvow("aalu")

// let num = [2,5,3,4,8]
// let calcSquare =(val) =>{
//     console.log(val**2)}
// num.forEach(calcSquare)


// let marks = [54,93,49,91,80,76]

// let filterd = marks.filter((val)=>{
//     return val>90
// })
// console.log(filterd)

let n =prompt("Enter your range")

let arr =[]
for(i=1;i<=n;i++){
    // arr.push(i)
    arr[i-1] =i
}
console.log(arr)
let summed =arr.reduce((pre,cur)=>{
    return pre+cur
})
console.log("sum=",summed)

let factorial =arr.reduce((pre,cur)=>{
    return pre*cur
})
console.log("Factorial=",factorial)