// alert("Hello world");
// // document.write("hello world");
// // console.log("hello on console");
// // console.info("info");

// // var x = 3;
// // var y =5;

// // var z  = x + y;
// // let str = "Hello folks via js"  ;
// // document.getElementById("test").innerHTML = str  +z;

// // var greeting = "";
// //var harley = ["abc", "def", "ghi","jkl", "mno", "pqr"];

// // greeting += harley[0] + "<br>";
// // greeting += harley[1] + "<br>";
// // greeting += harley[2] + "<br>";
// // greeting += harley[3] + "<br>";
// // greeting += harley[4] + "<br>";
// // greeting += harley[5] + "<br>";
// // greeting += harley[6] + "<br>";

// // for(let i =0 ; i<harley.length ; i++){
// //     greeting += harley[i] + "<br>";
// // }

// // for(i in harley){
// //     greeting += harley[i] + "<br>";
// // }
// // for(let i =0; i< 15; i++){
// //     if(i==10){
// //         continue;
// //     }
// //     greeting+= "<br> score is" + i;

// // }

// // function multiplicationFunk(num1, num2, num3){
// //     return num1*num2 * num3 ; 
// // } 

// // let result  = multiplicationFunk(45,4,5);

// // var bike = {
// //     name : "Splender",
// //     secondName : "plus",
// //     cc : "850cc",
// //     weight : "100",
// //     color : "black",
// //     fullName : function(){
// //         return this.name + "-" + this.secondName ;
// //     },
// // }

// // function showDate(){
// //     document.getElementById("test").innerHTML= Date();
// // }

// const button = document.getElementById("button");
// button.ondblclick = ()=>{
//     document.getElementById("test").innerHTML = Date();
// }
// const errBtn = document.getElementById("errBtn");
// errBtn.onclick = ()=>{

// }


// // try{aleert("this is wrong");}
// // catch(err){ document.getElementById("test").innerHTML = " done via  catch"}
// // //document.getElementById("test").innerHTML = bike.fullName();




// function err(){
// var msg, x ;
//  msg = document.getElementById("msg");
// msg.innerHTML = "";

// x= document.getElementById("msg").value;
// try{
//     if(x == "") throw "enter something";
//     if(isNaN(x)) throw "enter number";
//     if(x<4) throw "enter greater than 3";
// }catch(err){
//     msg.innerHTML = "error : " + err;
// }finally{
//     document.getElementById("some").value = "";
// }
// }



// var str = "JavaScript JAVAscript javaSCRIPT JaVaScRiPt  javascript";

// var text = str.replace(/([A-Z])\w+/,"google" );


// function increaseHighScore(currentScore ){
//     var newHighScore = 2 * currentScore ;
//     return newHighScore ;

// }

//console.log((newHighScore(10)))


// var newHighScore = function(currentScore ){
//      return(
//          console.log(this),
//          console.log(arguments)
//      )

// }(10);





// var herley  = {

//     name  : "Street 750",
//     color : "Black",

//     getBudgetForCustomisation : function(budget){
//         return (console.log("you need to lower the budget"),
//                 console.log(this.name)
//              )
//     },

    

// }

// herley.getBudgetForCustomisation(8000);


// var walk  = function(){
//     return(" He is able to walk");
// }

// var SuperHero = function(){
//     var power, villian;

// }

// SuperHero.prototype.walk = walk;

// peterParker = new SuperHero;
// peterParker.power = "Air Swing and Webs";
// peterParker.villian = " Green Goblin and Doctor Octopus";
// peterParker.walk();

// console.log(peterParker.power + peterParker.villian + peterParker.walk());



// ClarkKent = new SuperHero;
// ClarkKent.power = "fly";
// ClarkKent.villian = " lex Luthor" ;


// console.log(ClarkKent.power + ClarkKent.villian);


// var doSomething = function(work){
//     console.log(work);
//     console.log(this);

// }

// doSomething("pushups");

// var exercise = {benchpress : "4 sets" , squats : "2 sets"};
// doSomething.call(exercise,exercise.squats);
// doSomething.call(exercise,['crunches']);


// var multiplier = function(){
//     var result = 1;
//     for(let i = arguments.length-1; i>=0; i--){
//         result *= arguments[i];
//     }
//     return result
// }
// console.log(multiplier(2,5,8,6));

()=>{
    console.log("hello");
}

 












// document.getElementById("test").innerHTML = text;


















