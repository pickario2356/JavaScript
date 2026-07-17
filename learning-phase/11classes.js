// const student ={
//     fullName:"Allu khan",
//     marks:99.9,
//     printMarks1:function() {
//         console.log("marks:",this.marks)
//     }
// }
// console.log(student.printMarks())

// const employee = {
//     calcTax(){
//         console.log("tax rate is 1%")
// }}
// const bhalu={
//     salary:65000
// }
// prototype are pre build fnx  
// bhalu.__proto__ = employee// means employe ki fnx bhalu mai bhi in prototype

// classes


class Car{// Function
    constructor(tire){// ye sidha kaam krta hai mtlb sbse pehle
        console.log("Yo me Constructor")
    }
    up(){
        console.log("our compay is going up")
    }
    down(){
        console.log("Our company is going Downn")
    }

    setProduct(product){
        this.productName=product;// here this.(property) hoti hia
        this.price="unlimited"
    }
}


let Buggati = new Car("golden");// Object
let Auddi = new Car();
Auddi.setProduct("wheel")// isse setproduct ka default variable change hor aai

// console.log(Amazon.setProduct("money"))// undefined cuz no return
