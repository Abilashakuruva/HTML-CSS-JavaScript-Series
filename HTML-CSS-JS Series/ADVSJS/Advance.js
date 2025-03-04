/*Template string
var Example="Cricket";
document.write("I like Playing: "+ Example + "<br>")
document.write(`I like Playing ${Example}<br><h1>happy to see you`)  //Template string
console.log(`I like Playing ${Example} <br>`)
*/

/*Arrow function
function apple(){   //function
    document.write(`I like apples <br>`)
}
apple()

const mango=function(){  //function expression
    document.write(`Mangoes are sweet <br>`)
}
mango()

//const grapes=()=> document.write(`I like salad`) // arrow function
//grapes()

const grapes=(a,b)=> {document.write(a+b)} // arrow function
grapes(10,20)*/

//for-of loop --> array
//for-in loop --> object
/*const myValues=[1,2,3,4] 
const students=["Mahesh","Suresh","Prakash"] 

/*myValues.forEach(function(a){ //forEach loop
    document.write(a*2+"<br>")
})*/
/*
for(const a of students){     //for-of loop
    document.write(a+"<br>")
}*/
/*
const cities={
    one:"Hyderabad",
    two:"Delhi",
    three:"Bangalore",
    four:"Chennai"
}
for(let x in cities){    //for-in loop
    document.write(cities[x]+"<hr>")
}*/

/*Rest Operator=some values total one value ga estundii, function defined chesetappudu use chestam
function sampleRest(name, ...myCollection){
    let exampleValue=0;
    for(let i in myCollection){
        exampleValue+=myCollection[i]
    }
    document.write(name,exampleValue)

}
sampleRest("Kalyan",10,20,30,40)*/

/*Spread Operator=mana pass chesi na values spread chesi o/p estundii,function call chesatappudu leda o/p chesatappudu use chesede

const games=["cricket","football","Tennis"]
const players=["Dhoni","Richard","Pace"]
const coach=["Amith","Sumith"]

const FirstName={
    fName:"Suman"
}

const LastName={
    lName:"Kalyan"
}
// group=[...games,...players,...coach]
//document.write(group)

const fullName={...FirstName,  ...LastName}
console.log(fullName)
document.write(fullName.fName,  fullName.lName)*/

/*Destructuring
const sampleNums=[1,2,3,4,5,6,7,8,"Mahesh"]
//document.write(sampleNums[8])

const [one,two,three,apple,cinema,books,sports,eight,nine]=sampleNums
document.write("My name is: ", nine)*/
/*
const FullName={
    fName:"Suman",
    lName:"Kalyan"

}

const {fName,lName}=FullName
document.write(fName,lName)*/

/*Asynchronous
console.log("First Code")
console.log("Second Code")
//
setTimeout(()=>{
    console.log("Third Code")  //callback function

},3000)
//
console.log("Fourth Code")
console.log("Fifth Code")*/

/*Higher Order Functions
//welcome  register login thankyou
console.log("Welcome");

const Register=(apple)=>{
    setTimeout(()=>{
        console.log("Please Register");
        apple()
    },5000)
}

const Login=(mango)=>{
    setTimeout(()=>{
        console.log("Please Login");
        mango()
    },3000)
}

const Thankyou=()=>{
    setTimeout(()=>{
        console.log("Thank You");
        
    },1000)
}
//
Register(function(){
    Login(function(){       //callback hell
        Thankyou()
    })
})*/
//
// Promises ,Promise Implementation

const Register=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Please Register");
            reject("Register fail")
        },3000)

    })
}

const Login=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Please Login");
            resolve()
        },5000)

    })
}

const Thankyou=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Thank You & Welcome");
            resolve()
        },1000)

    })
}
Register().then(Login).then(Thankyou).catch((err)=>console.log(err))