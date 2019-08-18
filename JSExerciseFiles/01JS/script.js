// alert("Hello world");
// document.write("hello world");
// console.log("hello on console");
// console.info("info");

// var x = 3;
// var y =5;

// var z  = x + y;
// let str = "Hello folks via js"  ;
// document.getElementById("test").innerHTML = str  +z;

// var greeting = "";
//var harley = ["abc", "def", "ghi","jkl", "mno", "pqr"];

// greeting += harley[0] + "<br>";
// greeting += harley[1] + "<br>";
// greeting += harley[2] + "<br>";
// greeting += harley[3] + "<br>";
// greeting += harley[4] + "<br>";
// greeting += harley[5] + "<br>";
// greeting += harley[6] + "<br>";

// for(let i =0 ; i<harley.length ; i++){
//     greeting += harley[i] + "<br>";
// }

// for(i in harley){
//     greeting += harley[i] + "<br>";
// }
// for(let i =0; i< 15; i++){
//     if(i==10){
//         continue;
//     }
//     greeting+= "<br> score is" + i;

// }

// function multiplicationFunk(num1, num2, num3){
//     return num1*num2 * num3 ; 
// } 

// let result  = multiplicationFunk(45,4,5);

// var bike = {
//     name : "Splender",
//     secondName : "plus",
//     cc : "850cc",
//     weight : "100",
//     color : "black",
//     fullName : function(){
//         return this.name + "-" + this.secondName ;
//     },
// }

// function showDate(){
//     document.getElementById("test").innerHTML= Date();
// }

const button = document.getElementById("button");
button.ondblclick = ()=>{
    document.getElementById("test").innerHTML = Date();
}

document.getElementById("test").innerHTML = bike.fullName();
