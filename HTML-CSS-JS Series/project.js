/*variables

var bunty="playing"
console.log(bunty)

 var bunty="singing"
 console.log(bunty)
 //____________________________

 let school='nursery'
 console.log(school);

 school="primary"
 console.log(school)
 //__________________________________

 const ground="stadium"
 console.log(ground)

 ground="something"
 console.log(ground)*/

 /*data types 

 var a="This is String"
 console.log(a)

 num=102030
 console.log(num)

 boolean=true,false
 test=10<20;
 console.log(test)

 let sample=null;
 console.log(sample)

 let apple;
 console.log(apple)

 let fruits=['apple','mango','55',{name:'Abilasha'}]
 console.log(fruits)
 console.log(typeof fruits)
 console.log(Array.isArray(fruits))

 const games={
    cricket:'Dhoni',
    football:'racer'
 }
 console.log(games)
 console.log(typeof games)*/

 //variables
 //operators
/*
 var game='cricket'
 let captain='Dhoni'
 if(game=='Cricket'){
    document.write('match captain is ',captain)
 }else{
    document.write('sorry wrong answer')
 }*/
/*
 var game='cricket'
 let captain='Dhoni'
 const tennis='sania'

 if(game=='Cricket'){
    document.write('match captain is ',captain)
 }else if(tennis=='Sania'){
    document.write('correct')
 }else{
    document.write('sorry wrong answer')
 }*/
/*
var x=100;
var y=50;
var z=200;

if(x!==y){
    document.write("green")
}else if(y>z){
    document.write("blue")
}else if(z<x){ 
    document.write("yellow")
}else{
    document.write("All wrong statements")
}*/

/*logical operator
var x=100;
var y=50;
var z=200;
/*
if(x==y && y<z){
    document.write("Yes correct answer");
}else if((x+y)<z){
    document.write("Yellow");
}
if(x>z || z>y){
    document.write("z is greater than all");
}else if((x==y)||z>x){
    document.write("true");
}*/

/*ternary operator
document.write(2+3==6?"YES":"NO")

var x=100;
var y=50;
document.write(x>y?"green":"red")*/


//Dialog Boxes
alert
prompt
confirm

//alert("This is an alert")
//prompt("please enter your name")
//confirm("are you sure?")
/*
if (10<20){
    alert("10 is less than 20")
}*/
/*
var woman = confirm("Are you a woman")

if(woman){
    let name=prompt("please enter your name");
    document.write("hello madam."+ name +" welcome to my page")
}else{
    let name=prompt("please enter your name");
    document.write("hello madam."+ name +"welcome to my page")

} */

/*type conversion
 var a="40"
 var b=55
 var c=parseInt(a)
 var d=String(b)

 document.write(typeof c)
 document.write(c)
 document.write(typeof d)
 document.write(d)*/

 /*Switch case
 switch(true){
    case 10<20:
        myans="red"
    break;
    case 20>30:
        myans="green"
    break;
    case 50<20:
        myans="black"
    break;
    case 100==200:
        myans="orange"
    break;
    default:
        myans='none'
    break;
 }
 document.write(myans)*/
/*
 let name=prompt("please enter your name");
 let marks=prompt("enter your marks");

 switch(true){
    case marks>90 && marks<=100:
        res="topper"
    break;
    case marks>=65 && marks<=90:
        res="first class"
    break;
    case marks>=40 && marks<65:
        res="second class"
    break;
    case marks>=30 && marks<40:
        res="third class"
    break;
    case marks<30:
        res="fail,better luck next time"
    break;
    
    default:
        res='enter marks'
    break;
 }
 document.write("hello "+ name +"<h2> "+ res+"</h2>")*/

/* function
function goodstart(){
    console.log("test the code")
}
goodstart();*/

/*globalscope
var apple='red'
var banana='yellow'
var mango='green'
function fruits(){
    document.write(apple)
}
fruits()*/

/*function scope
var apple='red'
var banana='yellow'
var mango='green'

function fruits(){
    var x=100;
    let y=200;
    const z='mahi'
    document.write(x)
    document.write(y)
    document.write(z)
}
fruits()*/

/*block scope
function sports(){
    if(10<20){
        var tennis='sania'
        let cricket='virat'
        const ground='stadium'
        document.write(ground+'<br/>')
        document.write(cricket+'</br>')
        
    }
    document.write(tennis)
    
}
sports()*/

/*function expression
var a=function apple(){
    document.write("red")
}
a();*/

/*anonymous function
var b=function(){
    document.write("anonymous")
}
b();*/

//function with parameters and return value
/*
function score(a,b){
    return a+b+"<br>"
}
document.write(score(10,20))
document.write(score(107,220))
document.write(score(130,120))*/
/*
 function game(x,y){
    return document.write("I like "+x+" and "+y)
 }
 game("chese","football")*/
/*
 var username=prompt("please enter your name")
 function guest(myfriend){
    return document.write("hello welcome "+ myfriend)
 }
 guest(username)*/

 //methods
 //Array methods
 //String methods
 //Object methods

 //Array methods
 let collections=['Akash',55,true,{name:'Pratap'}]

 //1.Push(): Add one or more elements to the end of an array
/*
 let sports=['cricket','football']
 sports.push('socker',68)
 document.write(sports+'<br>')
 document.write(sports.length)*/

 //2.pop():  Remove the last element of an array
/*
 let books=['maths','chemistry','physics']
 let someres=books.pop()
 document.write(books+ '</br>')
 document.write('Deleted by pop method is '+ someres)*/

//3.shift():Remove the 1st element of an array
/*let states=['Delhi','mumbai','hyderabad']
states.shift()
document.write(states)*/

//4.unshift(): add one or more elements to the begging of an array
/*let scores=[22,69,58,74,45,65,'amar']
scores.unshift('suresh',26)
document.write(scores)*/

//5.concat(): combines two or more arrays and return a new array
/*let scores=[11,22,33,44,55]
let players=['amith','suresh','mahesh']
let newplayers=scores.concat(players)
document.write(newplayers)*/

//6.join():create a new string by concatenating all the elements of an array and return a string by specified separator
/*var team=[10,20,30,40,'suni','madhav','devi']
var myteam=team.join('***')
document.write(myteam)*/

//7.slice():returns a shallow copy of a portion of an array into a new array
/*let students=['anil','ramesh','sudheer',10,20,30]
let mystudents=students.slice(0,5)
document.write(mystudents)*/

//8.splice():changes the content of an array by removing,replacing or adding element
/*let mynumbers=[0,1,2,3,4,5,6,7,8]
let mynewnumbers=mynumbers.splice(3,0,'added value')
document.write(mynumbers+'<br>')
document.write(mynewnumbers)*/

//9.indexof():returns the first index at which a given element can be found in an array or -4 if it is not present
/*let students=['anil','devi','suresh','mahesh']
document.write(students.indexOf('ramesh'))*/

//10.forEach():excutes a provided function once for each array
/*let scores=[10,20,30,40,50]
let students=['suresh','murali','nagaraju','harish']
students.forEach(function(item,index){
    document.write(index+1+"."+item+'<br>')    
})
scores.forEach(function(apple){
    document.write(apple*2+'<br>')
})*/

//multidemensional array
/*let marks=[
    [
        ['anil','amar','akil','teja'],
        ['balu','bavi','bagi','bahu']
    ],
    [10,20,30],
    [40,50,60,70],
    [80,90],
    [100,110,120,130,140,150,160,170,180]
]
document.write("my expected res: ", marks[0][0][1])*/

//string methods
//split()
/*var sample="this is a string"
document.write(sample.split(""))
console.log(sample.split(""))*/

//trim()
/*var students='          ramesh           ';
document.write(students)
console.log(students.trim())*/

//charAt()
/*var students='ramesh';
document.write(students.charAt(2))*/

//loops
//for-loop
/*for(var a=5;a<10;a++){
    document.write(a+")"+"i love india"+'<br>')
}*/

//while-loop
/*let x=0;
while(x<=10){
    document.write(x+')'+"hello everyone"+'<br>')
    x++
}*/

//do-while loop
/*let y=0
do{
    document.write("this is do-while loop"+'<br>')
    y++

}while(y<20)*/

/*
var amount=50000;
var days=365;
var interest=1.75

for (let i=1; i <= days; i++){
    if (i%1===0){
        amount += interest
    }
    
    document.write("your amount for" + i + "th day" + amount +'<br>')
}*/

//DOM Manipulation
//getElementById()
//const a =document.getElementById("company")

//innerText
//a.innerText="Sales Force";

//innerHTML
//a.innerHTML="<h1>New Title</h1>";

//textContent
//a.textContent="New sales company";
//console.log(a)

//getElementByClassName()
//var myRevenue=document.getElementsByClassName("revenue")[0]
//myRevenue.textContent="Growth"
/*
const myBudget=document.getElementsByClassName('revenue')[1]
myBudget.innerText="My Amount"*/

/*getElementsByTagName
const tagTest=document.getElementsByTagName("p")
//tagTest.textContent="The text of paragraph"
//tagTest.innerHTML="<h1>Something</h1>"
for(let i=0; i<tagTest.length;i++){
    tagTest[i].textContent="Changed to new values"

}*/

/*
document.getElementById("company")
document.getElementsByClassName("nav-left")
document.getElementsByTagName("nav")*/
/*querySelector
const newCompany=document.querySelector("#company")
newCompany.textContent="Amazon"*/

/*querySelectorAll
const newCompany=document.querySelectorAll(".customers")
for(let x=0; x<newCompany.length; x++){
    newCompany[x].textContent="Employees"

}*/
/*difference 
const targetHidden=document.querySelector("p")
//console.log(targetHidden.innerText);
console.log(targetHidden.textContent);*/

//attributes
//value
//name

/*const targettingAtt=document.querySelector("header").attributes.href.value
console.log(targettingAtt)*/

/*setAttribute()
const targetNav=document.querySelector("nav")
targetNav.setAttribute("style","border:5px solid black")*/

// const targetSide=document.querySelector(".sidenav")
// targetSide.setAttribute("style","background-color:green")

/*removeAttribute
const targetRemove=document.querySelector(".sidenav")
targetRemove.removeAttribute("class")*/

//css in js
//document.querySelector("header").style.backgroundColor="red"
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

const loginButton=document.getElementById("loginBtn")
const loginModal=document.getElementById("loginSection")
const sideNavbar=document.querySelector(".sidenav")
const mainSec=document.querySelectorAll(".main .section")


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

const NavBorder= document.getElementById("add-border")
NavBorder.addEventListener("click",addingBorder)

function addingBorder(){
    document.querySelector("header").style.border="5px solid black"

}

if(10>20){
    NavBorder.removeEventListener('click',addingBorder)
}*/
/*
const mainForm=document.getElementById("myForm")
const userName=document.getElementById("nameInput")
const inputName=document.getElementById("name")
/*
mainForm.addEventListener('submit',function(e){
    e.preventDefault()

    const myUserName=userName.value

    inputName.textContent=myUserName

    mainForm.reset()


})*/
/*
const userInput=document.getElementById("nameInput")

userInput.addEventListener("focus",function(event){
    event.target.style.background='pink'
    //console.log(event.target)
})

userInput.addEventListener("blur",function(event){
    event.target.style.background=''
    //console.log(event.target)
})*/
/*
const myNewColors=document.getElementById("myColors")
const myNewBox=document.getElementById("box")

myNewColors.addEventListener("change",function(){
    myNewBox.style.background=myNewColors.value
    myNewBox.textContent =myNewColors.value
})



mainForm.addEventListener('input',function(e){
    e.preventDefault()

    const myUserName=userName.value

    inputName.textContent=myUserName


})*/
/*
const openNav=document.getElementById("open")
const closeNav=document.getElementById("close")

const sideNavbar=document.querySelector(".sidenav")

closeNav.addEventListener('click', closeSideNavBar)

function closeSideNavBar(){
    //sideNavbar.classList.add("apple")
    //document.querySelector(".apple").style.display='none'
    //sideNavbar.classList.remove("sidenav")
    sideNavbar.classList.toggle("mango")

}
/*
openNav.addEventListener('click', openSideNavBar)

function openSideNavBar(){
    sideNavbar.style.display="block"
    //document.querySelector(".apple").style.display='none'
}*/

/*DateMethod
const toDay=new Date()
//document.write(toDay)
//document.write(toDay.getDate())
//document.write(toDay.getMonth()+1)
//document.write(toDay.getFullYear())

//toDay.setDate(10)
//toDay.setMonth(10)
toDay.setFullYear(2026)
document.write(toDay)*/

//Math method
//const calculation=Math.ceil(10.53)
//const calculation=Math.floor(10.99)
//const calculation=Math.round(11.53)
//const calculation=Math.max(12,55,890,5582,11545)
//const calculation=Math.random()*10
//const calculation= Math.floor(Math.random()*10)+1
//document.write("<h1> Calculation: ",calculation)

/*array
const sampleArray=["Apple","Mango","Banana",true,55]
document.write(sampleArray[1])

//object
const capitals={
    India:"New Delhi",
    telangana:"hyderabad",
    maharastra:"Mumbai",
    location:function(){
        return "I live in "+this.telangana
    }
}
document.write(capitals.India)*/

//setinterval and clearinterval
/*const Animator=setInterval(sampleAnimation,1000)
let a=0;

function sampleAnimation(){
    a=a+1
   
    if(a==5){
        clearInterval(Animator)
    }else{
        const textAnimation=document.getElementById("title")
        textAnimation.style.fontSize=a+"rem"

    }

}*/

/*settimeout and cleartimeout
const changer=setTimeout(function(){
    const myElement=document.getElementById("title")
    myElement.style.color="red"
    myElement.style.fontSize="5rem"

},5000)

function stopAction(){
    clearTimeout(changer)
}*/