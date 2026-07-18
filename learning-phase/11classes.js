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



// "CLASSES"

// class Car{// Function
//     constructor(tire,milage){// automatically and sbse pehle
//         console.log("Yo me Constructor");
//         this.brand = tire
//         this.milage= milage
//     }
//     up(){
//         console.log("Start")
//     }
//     down(){
//         console.log("stop")
//     }

//     // setProduct(product){
//     //     this.productName=product;// here this.(property) hoti hia
//     //     this.price="unlimited"
//     // }
// }
// let Buggati = new Car("Royal Brand",67);// Object
// console.log(Buggati)
// let Auddi = new Car("idk",10);
// console.log(Auddi)
// Auddi.brand="Cureently Cheapest"// in CL yaha this ki no need direct property name
// Auddi.setProduct("wheel")// isse setproduct ka default variable change hor aai
// console.log(Amazon.setProduct("money"))// undefined cuz no return



// "INHERITANCE"

// class parent {
//     hello(){
//         console.log("Helooooooooo")
//     }
// }

// class child extends parent {}

// let milk = new child()
// console.log(milk.hello())// () sai fnx work hota hai agr nahi () lgaya to jo gnx hai wo print hoga


// class  Human{
//     constructor(){
//         this.species="Celestialsapien"
//     }
//     eat(){
//         conosle.log("I can eat anything")
//     }
//     game(){
//         console.log("I AM MASTER IN ALL GAMES")
//     }
//     work(){
//         console.log("unemployed")
//     }
// }

// class codder extends Human{
//     work(){
//         console.log("I TRAIN AI MODELS")
//     }
// }

// let AlienX= new Human
// // console.log(AlienX.constructor())// ye glt cuz constructor esa special fnx hai jo automaticaly hota hai to call nahi krna pdta to ()  ki bhi no need
// console.log(AlienX.species)
// // isme () nahi cuz species ek fnx nahi ek property(variable) hai 
// let Aegon = new codder()
// Aegon direct console sai fnx print hoga aAegon.xyz() sai fnx work krta hai
// if same fnx dono mai hai to child wale superior hai
// console.log(Aegon.game())// will work


// "SUPER KEYWORD"

// class  Human{
//     constructor(name){
//         this.species="Celestialsapien"
//         this.name = name
//         // console.log("enter parent constructor")
//     }
//     eat(){
//         console.log("I can eat anything")
//     }
// }
// class codder extends Human{
//     // constructor(branch){
//      constructor(name){
//         // console.log("enter child constructor")
//         // super()// parent kai fnx ko acces kai liye ya keh sakte hai parent mai add krne kai liyer
//         // this.branch = branch
//         // console.log("exit child constructor")

//         super(name)// spr aur cnstrct dono mai name cuz super parent sai acces cnstrct kia accese ho ra hai ye tell
//     }
//     work(){
//         super.eat()
//         console.log("I TRAIN AI MODELS")
//     }
// }

// let coddObj = new codder("Priyanshu")
// // console.log(coddObj.work())