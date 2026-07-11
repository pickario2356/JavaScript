// "ATTRIBUTES"

// let parah = document.querySelector("p")

// let parahAtt = parah.getAttribute("class")
// console.log(parahAtt)


// let div = document.querySelector("div");

// let nameAtt = div.getAttribute("name");
// console.log(nameAtt);


// let head = document.querySelector("h3");

// let headAtt = head.getAttribute("id");
// console.log(headAtt);


// let box = document.querySelector("h3");
// console.dir(box.style);
// box.style.boxShadow = "0px 0px 10px black";

// console.dir(box.style.backgroundColor);
// console.dir(box.style.boxShadow);

//as ye inline style hai to bina getcomputed kai bs wohi aynge jo mene jtml aur js mai change kiye hai
// getcomputedstyle
// let cssStyles = getComputedStyle(box);
// console.dir(cssStyles.height);


// "INSERT ELEMENT"

// let newBtn = document.createElement("Button");
// newBtn.innerText= "Do Not Click Me";
// // console.dir(newBtn);

// let div = document.querySelector("div")

// // div.prepend(newBtn);// make first child
// div.append(newBtn);// make last child
// // div.before(newBtn);
// // div.after(newBtn);


let heading = document.createElement("h1");
heading.innerHTML = "<i>Yo Ho Ho HO</i>";

document.body.before(heading);


let para = document.querySelector("p");
para.remove();