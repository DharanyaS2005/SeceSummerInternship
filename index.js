console.log(a);
var a=10;
console.log(a);
/*The period during which let and const variables exist within a scope but 
cannot be accessed or assigned a value before their declaration and initialization 
is known as temporal dead zone*/
//console.log(b);
let b=20;
console.log(b);
console.log(a);

aa();
//Functions in JavaScript
//1.Named Function
function aa(){
    console.log("Named Function");
}
aa();

//ab();
//reference error-let
//TypeError - var

//2.Function Expression
var ab=function(){
    console.log("Function expression");
}
ab();

//3.Arrow Function
let s=()=>{
    console.log("Arrow Function");
}
s();

//4.Callback Function

//5.IIFE Immediately Invoked Function Expression

(()=>{
    console.log("IIFE");
})()

//Parameter and Arguments

function add(p1,p2){
    console.log(p1+p2)
}
add(5,6);