// main.html
// // variables

// var bunty="playing"
// console.log(bunty)   //playing

// var bunty="singing"
// console.log(bunty)    //singing
// //  //____________________________

//  let school='nursery'
//  console.log(school);  //nursery

//  school="primary"
//  console.log(school)   //primary
// // //__________________________________

//  const ground="stadium"
//  console.log(ground)   //stadium

//  ground="something"
//  console.log(ground)  //TypeError

//  /*data types 

//  var a="This is String"
//  console.log(a)          //This is String
//  console.log(typeof(a))  //string

//  num=102030
//  console.log(num)   //102030
//  console.log(typeof(num))  //number

//  boolean=true,false
//  test=10<20;
//  console.log(test)  //true
//  console.log(typeof(test)) //boolean

//  let sample=null;
//  console.log(sample)  //null

//  let apple;
//  console.log(apple)  //undefined

//  let fruits=['apple','mango','55',{name:'Abilasha'}]
// //  console.log(fruits)   //['apple','mango','55',{name:'Abilasha'}]
//  console.log(typeof(fruits)) //object
//  console.log(Array.isArray(fruits)) //true

//  const games={
//     cricket:'Dhoni',
//     football:'racer'
//  }
//  console.log(games)   //{cricket:'Dhoni',football:'racer'}
//  console.log(typeof(games))  //object

 //variables
 //operators
//  var game='cricket'
//  let captain='Dhoni'
//  if(game=='cricket'){
//     document.write('match captain is ',captain)   
//  }else{
//     document.write('sorry wrong answer')
//  }                            //match captain is Dhoni

//  var game='cricket'
//  let captain='Dhoni'
//  const tennis='sania'
//  if(game=='Cricket'){
//     document.write('match captain is ',captain)
//  }else if(tennis=='sania'){
//     document.write('correct')
//  }else{
//     document.write('sorry wrong answer')
//  }                          //correct

// var x=100;
// var y=50;
// var z=200;
// if(x!==y){
//     document.write("green")
// }else if(y>z){
//     document.write("blue")
// }else if(z>x){ 
//     document.write("yellow")
// }else{
//     document.write("All wrong statements")
// }              //green

/*logical operator*/
// var x=100;
// var y=50;
// var z=200;
// if(x==y && y<z){
//     document.write("Yes correct answer");
// }else if((x+y)<z){
//     document.write("Yellow");     //yellow
// }
// if(x>z || z>y){
//     document.write("z is greater than all");
// }else if((x==y)||z>x){
//     document.write("true");     //z is greater than all
// }

/*ternary operator*/
// document.write(2+3==6?"YES":"NO")   //NO

// var x=100;
// var y=50;
// document.write(x>y?"green":"red")  //green


//Dialog Boxes
alert
prompt
confirm

// alert("This is an alert")
// prompt("please enter your name")
// confirm("are you sure?")

// if (10<20){
//     alert("10 is less than 20")  // page refresh pop: 10 is less than 20
// }

// var woman = confirm("Are you a woman")   // page refresh pop: Are you a woman
// if(woman){
//     let name=prompt("please enter your name");  //Abi
//     document.write("hello madam."+ name +" welcome to my page")
// }else{
//     let name=prompt("please enter your name");
//     document.write("hello sir."+ name +" welcome to my page")
// }                                         // hello madam.Abi welcome to my page

/*type conversion*/
//  var a="40"
//  var b=55
//  var c=parseInt(a)
//  var d=String(b)
//  document.write(typeof c)   //number
//  document.write(c)          //40
//  document.write(typeof d)   //string
//  document.write(d)          //55   

 /*Switch case*/
//  switch(true){
//     case 10>20:
//         myans="red"
//     break;
//     case 20>30:
//         myans="green"
//     break;
//     case 50<20:
//         myans="black"
//     break;
//     case 100==200:
//         myans="orange"
//     break;
//     default:
//         myans='none'
//     break;
//  }
//  document.write(myans)   //none

//  let name=prompt("please enter your name");  //Abilasha
//  let marks=prompt("enter your marks");       //75     
//  switch(true){
//     case marks>90 && marks<=100:
//         res="topper"
//     break;
//     case marks>=65 && marks<=90:
//         res="first class"
//     break;
//     case marks>=40 && marks<65:
//         res="second class"
//     break;
//     case marks>=30 && marks<40:
//         res="third class"
//     break;
//     case marks<30:
//         res="fail,better luck next time"
//     break;    
//     default:
//         res='enter marks'
//     break;
//  }
//  document.write("hello "+ name +"<h2> "+ res+"</h2>")   //hello Abilasha first class

/* function*/
// function goodstart(){
//     console.log("test the code")
// }
// goodstart();         //test the code

/*global scope*/
// var apple='red'
// var banana='yellow'
// var mango='green'
// function fruits(){
//     document.write(apple)
// }
// fruits()               //red

/*function scope*/
// var apple='red'
// var banana='yellow'
// var mango='green'
// function fruits(){
//     var x=100;
//     let y=200;
//     const z='mahi'
//     document.write(x) 
//     document.write(y) 
//     document.write(z) 
// }
// fruits()  //100200mahi

/*block scope*/
// function sports(){
//     if(10<20){
//         var tennis='sania'
//         let cricket='virat'
//         const ground='stadium'
//         document.write(ground+'<br/>')
//         document.write(cricket+'</br>')  
//     }
//     document.write(tennis)    
// }
// sports()            //stadium  virat  sania

/*function expression*/
// var a=function apple(){
//     document.write("red")
// }
// a();   //red

/*anonymous function*/
// var b=function(){
//     document.write("anonymous")
// }
// b();  //anonymous

//function with parameters and return value
// function score(a,b){
//     return a+b+"<br>"
// }
// document.write(score(10,20))   //30
// document.write(score(107,220)) //327 
// document.write(score(130,120)) //250

//  function game(x,y){
//     return document.write("I like "+x+" and "+y)
//  }
//  game("chese","football")  //I like chese and football

//  var username=prompt("please enter your name")
//  function guest(myfriend){
//     return document.write("hello welcome "+ myfriend)
//  }
//  guest(username)   // hello welcome Abilasha

 //methods
 //Array methods
 //String methods
 //Object methods

 //Array methods
 let collections=['Akash',55,true,{name:'Pratap'}]

 //1.Push(): Add one or more elements to the end of an array
//  let sports=['cricket','football']
//  sports.push('socker',68)
//  document.write(sports+'<br>')   //cricket,football,socker,68
//  document.write(sports.length)   //4

 //2.pop():  Remove the last element of an array
//  let books=['maths','chemistry','physics']
//  let someres=books.pop()
//  document.write(books+ '</br>')   //maths,chemistry
//  document.write('Deleted by pop method is '+ someres)  //Deleted by pop method is physics

//3.shift():Remove the 1st element of an array
// let states=['Delhi','mumbai','hyderabad']
// states.shift()
// document.write(states)  //mumbai,hyderabad

//4.unshift(): add one or more elements to the begging of an array
// let scores=[22,69,58,74,45,65,'amar']
// scores.unshift('suresh',26) 
// document.write(scores)      //suresh,26,22,69,58,74,45,65,amar

//5.concat(): combines two or more arrays and return a new array
// let scores=[11,22,33,44,55]
// let players=['amith','suresh','mahesh']
// let newplayers=scores.concat(players)
// document.write(newplayers)  //11,22,33,44,55,amith,suresh,mahesh

//6.join():create a new string by concatenating all the elements of an array and return a string by specified separator
// var team=[10,20,30,40,'suni','madhav','devi']
// var myteam=team.join('***')
// document.write(myteam)   //10***20***30***40***suni***madhav***devi

//7.slice():extracts characters between start and end
// let students=['anil','ramesh','sudheer',10,20,30]
// let mystudents=students.slice(2,6)
// document.write(mystudents)  //sudheer,10,20,30

//8.splice():changes the content of an array by removing,replacing or adding element
// let mynumbers=[0,1,2,3,4,5,6,7,8]
// // let mynewnumbers=mynumbers.splice(0,5)  /*remove*/  //o/p: 5,6,7,8
// // let mynewnumbers=mynumbers.splice(0,4,"something to see")  /*replace*/  //o/p: something to see,4,5,6,7,8
// let mynewnumbers=mynumbers.splice(3,0,'added value')  /*added*/  //o/p: //0,1,2,added value,3,4,5,6,7,8
// document.write(mynumbers+'<br>')   

//9.indexof():returns the first index at which a given element can be found in an array or -1 if it is not present
// let students=['anil','devi','suresh','mahesh']
// document.write(students.indexOf('mahesh'))     //3

//10.forEach():excutes a provided function once for each array
// let scores=[10,20,30,40,50]
// let students=['suresh','murali','nagaraju','harish']
// students.forEach(function(item,index){
//     document.write(index+1+"."+item+'<br>')    
// })     //1.suresh   2.murali  3.nagaraju  4.harish
// scores.forEach(function(apple){
//     document.write(apple*2+'<br>')
// })  //20  40  60   80   100

//multidemensional array*/
// let marks=[
//     [
//         ['anil','amar','akil','teja'],
//         ['balu','bavi','bagi','bahu']
//     ],
//     [10,20,30],
//     [40,50,60,70],
//     [80,90],
//     [100,110,120,130,140,150,160,170,180]
// ]
// document.write("my expected res: ", marks[4][7])  //001 amar, 011 bavi,10 10, 22 60,31 90,43 130, 47 170

//string methods
//split(): split string to list
// var sample="this is a string"
// document.write(sample.split(""))  //t,h,i,s, ,i,s, ,a, ,s,t,r,i,n,g
// console.log(sample.split(""))  //['t', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 's', 't', 'r', 'i', 'n', 'g']

//trim(): remove left and right spaces
// var students='          ramesh           ';
// document.write(students)          //ramesh
// console.log(students.trim())      //ramesh

//charAt(): specifies the index element
// var students='ramesh';
// document.write(students.charAt(5))  //h

// length: string length
// console.log("Hello".length)   //5

// toUppercase(),toLowerCase()
// let s = "JavaScript";
// console.log(s.toUpperCase()); // JAVASCRIPT
// console.log(s.toLowerCase()); // javascript

// let text = "Hello World JS";
// console.log(text.replace(/ /g, "-")); // Hello-World-JS

// substring(): slice and substring same but it swaps the values. negative treated as 0
// let str = "JavaScript";

// console.log(str.substring(0, 4));   // "Java"
// console.log(str.substring(4, 10));  // "Script"
// console.log(str.substring(4));      // "Script"
// console.log(str.substring(5, 2));   // "va" (2 and 5 are swapped)
// console.log(str.substring(-3, 4));  // "Java" (negative treated as 0)

//loops
//for-loop: run a block of code for each item in a sequence
// for(var a=0;a<100;a++){
//     document.write(a+")"+"i love india"+'<br>')
// }   //0)i love india -------99)i love india

//while-loop: repeat code while condition is true
// let x=0;
// while(x<=10){
//     document.write(x+')'+"hello everyone"+'<br>')
//     x++
// }   //0)hello everyone----- 10)hello everyone

//do-while loop
// let y=0
// do{
//     document.write(y+')'+"this is do-while loop"+'<br>')
//     y++

// }while(y<20)  // 0)this is do-while loop----- 19)this is do-while loop

// realtime progrom: bank FD
// var amount=50000;
// var days=365;
// var interest=1.75
// for (let i=1; i <= days; i++){
//     if (i%1===0){
//         amount += interest
//     }    
//     document.write("your amount for " + i + "th day " + amount +'<br>')
// }   //your amount for 1th day 50001.75------your amount for 365th day 50638.75

/*------------------------------------------------------------------------------------------------*/

//DOM Manipulation
// getElementById()
// const a =document.getElementById("company")
// a.innerText="Sales Force";  // //innerText
// a.innerHTML="<h1>New Title</h1>";  //innerHTML
// a.textContent="New sales company";  //textContent
// console.log(a)

//getElementByClassName()
// var myRevenue=document.getElementsByClassName("revenue")[0]
// myRevenue.textContent="Growth"

// const myBudget=document.getElementsByClassName('revenue')[1]
// myBudget.innerText="My Amount"

//getElementsByTagName()
const tagTest=document.getElementsByTagName("p")//[1]
// tagTest.textContent="The text of paragraph"
// tagTest.innerHTML="<h1>Something</h1>"
// for(let i=0; i<tagTest.length;i++){
//     tagTest[i].textContent="Changed to new values"
// }


document.getElementById("company")
document.getElementsByClassName("nav-left")
document.getElementsByTagName("nav")
// /*querySelector()
// const newCompany=document.querySelector("#company")
// newCompany.textContent="Amazon"

// querySelectorAll()
// const newCompany=document.querySelectorAll(".customers")
// for(let x=0; x<newCompany.length; x++){
//     newCompany[x].textContent="Employees"
// }

// difference innerText , textContent
// const targetHidden=document.querySelector("p")
// console.log(targetHidden.innerText);          //This is result:fail
// console.log(targetHidden.textContent);         //This is result:Successfail

//attributes
//value
//name

// const targettingAtt=document.querySelector("header").attributes.href.value //name
// console.log(targettingAtt)

// setAttribute()
// const targetNav=document.querySelector("nav")
// targetNav.setAttribute("style","border:5px solid black")

// const targetSide=document.querySelector(".sidenav")
// targetSide.setAttribute("style","background-color:green")

// removeAttribute()
// const targetRemove=document.querySelector(".sidenav")
// targetRemove.removeAttribute("class")

//css in js
// document.querySelector("header").style.backgroundColor="red"
/*
const darkTheme = function() {
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".dark-theme").textContent = "Light Theme"
    document.querySelector("header").style.backgroundColor = "#2E282A"
    document.querySelector(".sidenav").style.backgroundColor = "#808A9F"
}

const lightTheme = function() {
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector(".dark-theme").textContent = "Dark Theme"
    document.querySelector("header").style.backgroundColor = "#F86624"
    document.querySelector(".sidenav").style.backgroundColor = "#1768AC"

}

function eleHover(element) {
    element.style.backgroundColor = "yellow";
}

function eleOut(item) {
    item.style.backgroundColor = "#DEE7E7"
}

const changeCompany=function(){
    document.querySelector("#company").textContent="Sales Force";
}

const normal=function(){
    document.querySelector("#company").textContent="Company";
}

const keyPressed=function(){
    document.querySelector("body").style.backgroundColor="white"
}

const keyDown=function(){
    document.querySelector("body").style.backgroundColor="red"
}

// login
const loginButton=document.getElementById("loginBtn")
const loginModal=document.getElementById("loginSection")
const sideNavbar=document.querySelector(".sidenav")
// const mainSec=document.querySelectorAll(".main .section")
loginButton.onclick=showLogin
function showLogin(){
    sideNavbar.style.display="none";
    mainSec.forEach(function(item){
        item.style.display="none"
    })
    loginModal.style.display='block'
}
document.getElementById("closeBtn").addEventListener('click',hideLogin)
function hideLogin(){
    sideNavbar.style.display="block";
    mainSec.forEach(function(item){
        item.style.display="block"
    })
    loginModal.style.display="none"
}
document.getElementById("loginSubmit").addEventListener('mouseover',function(){
    this.style.background='green'
})
document.getElementById("loginSubmit").addEventListener('mouseout',function(){
    this.style.background='#1768AC'

})
*/
// addEventLister()
// const NavBorder= document.getElementById("add-border")
// NavBorder.addEventListener("click",addingBorder)
// function addingBorder(){
//     document.querySelector("header").style.border="5px solid black"
// }
/*
if(10<20){
    NavBorder.removeEventListener('click',addingBorder)
}*/

/* submit,rest
const mainForm=document.getElementById("myForm")
const userName=document.getElementById("nameInput")
const inputName=document.getElementById("name")

mainForm.addEventListener('submit',function(e){
    e.preventDefault()
    const myUserName=userName.value
    inputName.textContent=myUserName
    mainForm.reset()
})*/

/* focus,blur
const userInput=document.getElementById("nameInput")
userInput.addEventListener("focus",function(event){
    event.target.style.background='pink'
    console.log(event.target)
})
userInput.addEventListener("blur",function(event){
    event.target.style.background=''
    console.log(event.target)
})*/

/* change
const myNewColors=document.getElementById("myColors")
const myNewBox=document.getElementById("box")
myNewColors.addEventListener("change",function(){
    myNewBox.style.background=myNewColors.value
    myNewBox.textContent =myNewColors.value
})*/

/*input
const mainForm=document.getElementById("myForm")
const userName=document.getElementById("nameInput")
const inputName=document.getElementById("name")
mainForm.addEventListener('input',function(e){
    e.preventDefault()
    const myUserName=userName.value
    inputName.textContent=myUserName
})*/


/*add,remove,toggle
const openNav=document.getElementById("open")
const closeNav=document.getElementById("close")
const sideNavbar=document.querySelector(".sidenav")
closeNav.addEventListener('click', closeSideNavBar)
function closeSideNavBar(){
    /*sideNavbar.classList.add("apple")
    document.querySelector(".apple").style.display='none'*/
    /*sideNavbar.classList.remove("sidenav")*/
    /*sideNavbar.classList.toggle("mango")*/
// } 
/*
openNav.addEventListener('click', openSideNavBar)
function openSideNavBar(){
    sideNavbar.style.display="block"
}
*/


/* -----------------------------------------------------------------*/

// DateMethod
// const toDay=new Date()
// document.write(toDay)                //Sat Aug 23 2025 14:57:39 GMT+0530 (India Standard Time)
// document.write(toDay.getDate())      //23
// document.write(toDay.getMonth()+1)   //8
// document.write(toDay.getFullYear())     //2025

// toDay.setDate(10)       //Sun Aug 10 2025 15:00:04 GMT+0530 (India Standard Time)
// toDay.setMonth(10)      //Sun Nov 23 2025 15:01:00 GMT+0530 (India Standard Time)
// toDay.setFullYear(2026)    //Sun Aug 23 2026 15:02:07 GMT+0530 (India Standard Time)
// document.write(toDay)

//Math method
// const calculation=Math.ceil(10.53)                    //11
// const calculation=Math.floor(10.99)                   //10
// const calculation=Math.round(11.53)                   //12
// const calculation=Math.max(12,55,890,5582,11545)      //11545
// const calculation=Math.min(12,55,890,5582,11545)      //12
// const calculation=Math.random()*10                    //9.1736
// const calculation= Math.floor(Math.random()*10)+1     //2
// document.write("<h1> Calculation: ",calculation)

// array
// const sampleArray=["Apple","Mango","Banana",true,55]
// document.write(sampleArray[1])   //Mango

// //object
// const capitals={
//     India:"New Delhi",
//     telangana:"hyderabad",
//     maharastra:"Mumbai",
//     location:function(){
//         return "I live in "+this.telangana
//     }
// }
// document.write(capitals.India)  //NewDelhi

/*-------------------------------------------------------------------------*/

//setinterval and clearinterval
// const Animator=setInterval(sampleAnimation,1000)
// let a = 0;
// function sampleAnimation(){
//     a=a+1   
//     if(a==5){8
//         clearInterval(Animator)
//     }else{
//         const textAnimation=document.getElementById("title")
//         textAnimation.style.fontSize=a+"rem"
//     }
// }

// settimeout and cleartimeout
// const changer=setTimeout(function(){
//     const myElement=document.getElementById("title")
//     myElement.style.color="red"
//     myElement.style.fontSize="5rem"

// },5000)

// function stopAction(){
//     clearTimeout(changer)
// }