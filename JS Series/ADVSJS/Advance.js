// Template string
// var Example="Cricket";
// document.write("I like Playing: "+ Example + "<br>")  //I like Playing: Cricket
// document.write(`I like Playing ${Example}<br><h1>happy to see you`)  //I like Playing Cricket    happy to see you
// console.log(`I like Playing ${Example} <br>`)   //I like Playing Cricket <br>


//function
// function apple(){   
//     document.write(`I like apples <br>`)
// }
// apple()   //I like apples

//function expression
// const mango=function(){  
//     document.write(`Mangoes are sweet <br>`)
// }
// mango()   //Mangoes are sweet

// arrow function
// const grapes=()=> document.write(`I like salad`) 
// grapes()  //I like salad

// arrow function
// const grapes=(a,b)=> {document.write(a+b)} 
// grapes(10,20)  //30

//for-of loop --> array
//for-in loop --> object
//forEach loop
// const myValues=[1,2,3,4] 
// myValues.forEach(function(a){ 
//     document.write(a*2+"<br>")
// })              //  2 4 6 8

//for-of loop
// const students=["Mahesh","Suresh","Prakash"] 
// for(const a of students){     
//     document.write(a+"<br>")
// }       //Mahesh  Suresh  Prakash

//for-in loop
// const cities={
//     one:"Hyderabad",
//     two:"Delhi",
//     three:"Bangalore",
//     four:"Chennai"
// }
// for(let x in cities){    
//     document.write(cities[x]+"<hr>")
// }     //Hyderabad Delhi Bangalore Chennai

/*Rest Operator=some values total one value ga estundii, function defined chesetappudu use chestam*/
// function sampleRest(name, ...myCollection){
//     let exampleValue=0;
//     for(let i in myCollection){
//         exampleValue+=myCollection[i]
//     }
//     document.write(name,exampleValue)
// }
// sampleRest("Kalyan ", 10,20,30,40)    //kalyan 100

/*Spread Operator=mana pass chesi na values spread chesi o/p estundii,function call chesatappudu leda o/p chesatappudu use chesede*/
// const games=["cricket","football","Tennis"]
// const players=["Dhoni","Richard","Pace"]
// const coach=["Amith","Sumith"]
// const FirstName={
//     fName:"Suman"
// }
// const LastName={
//     lName:"Kalyan"
// }
// group=[...games,...players,...coach]
// document.write(group)      //cricket,football,Tennis,Dhoni,Richard,Pace,Amith,Sumith
// const fullName={...FirstName,  ...LastName}
// console.log(fullName)        //object
// document.write(fullName.fName,  fullName.lName)       //SumanKalyan

/*Destructuring*/
// const sampleNums=[1,2,3,4,5,6,7,8,"Mahesh"]
// // document.write(sampleNums[8])  // Mahesh
// const [one,two,three,apple,cinema,books,sports,eight,nine]=sampleNums
// document.write("My name is: ", sports)      //My name is: 7

// const FullName={
//     fName:"Suman",
//     lName:" Kalyan"
// }

// const {fName, lName}=FullName
// document.write(fName, lName)      //Suman Kalyan

/*Asynchronous*/
// console.log("First Code")
// console.log("Second Code")
// // //callback function
// setTimeout(()=>{
//     console.log("Third Code")  //callback function
// },3000)
// console.log("Fourth Code")
// console.log("Fifth Code")    // First Code Second Code Fourth Code Fifth Code Third Code

/*Higher Order Functions*/
// welcome  register login thankyou
// console.log("Welcome");

// const Register=(apple)=>{
//     setTimeout(()=>{
//         console.log("Please Register");
//         apple()
//     },5000)
// }

// const Login=(mango)=>{
//     setTimeout(()=>{
//         console.log("Please Login");
//         mango()
//     },3000)
// }

// const Thankyou=()=>{
//     setTimeout(()=>{
//         console.log("Thank You");
        
//     },1000)
// }
// // callback hell
// Register(function(){
//     Login(function(){       //callback hell
//         Thankyou()
//     })
// })      // Welcome  Please Register  Please Login   Thank You


// Promises ,Promise Implementation
// const Register=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Please Register");
//             reject("Register fail")
//         },3000)
//     })
// }

// const Login=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Please Login");
//             resolve()
//         },5000)
//     })
// }

// const Thankyou=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Thank You & Welcome");
//             resolve()
//         },1000)
//     })
// }
// Register().then(Login).then(Thankyou).catch((err)=>console.log(err))   //method chaining
// Please Register   Register fail