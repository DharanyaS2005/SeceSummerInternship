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


//first sync part is executed and then go for Async part

let b1="Result is ready";
console.log(b1);

//async part
setTimeout(()=>{
    console.log("after some time");
},2000)


setTimeout(()=>{
    console.log("1st");
    setTimeout(()=>{
        console.log("2nd");
        setTimeout(()=>{
            console.log("3rd")
        },2000)
    },2000)
},2000)
var a=10;
console.log(a)

let mypromise=new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve("I have to give treat");
    }else{
        reject("will not");
    }
});
mypromise.then((q)=> console.log(q)).catch((w)=>console.log(w));

const handlePromise=async()=>{
   try{
     const a=await mypromise;
    console.log(a);
   }
   catch(e){
     console.log("error from async",e);
   }
   finally{
     console.log("it will run in everycase");
   }
}

handlePromise();



const fetchData=async()=>{
    try{
    const response=await fetch("https://dummyjson.com/products")
    console.log(response);
    if(response.ok){
        const data= await response.json();
        console.log(data)
    }
}
catch(err){
    console.log(err);
}
};
fetchData();


setInterval(()=>{
    let z=1;
    console.log(++z);
},3000)

//[]+[] String
//[]+{} Array of objects
//{}+[] 0