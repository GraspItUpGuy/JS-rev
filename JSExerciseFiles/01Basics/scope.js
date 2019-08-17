let iAmGLobal = "someValue";

if(true){
    
    var iAmLocal = "spmeMoreValue";
    iAmGLobal = "someValue again";
    console.log(iAmGLobal);
    console.log(iAmLocal);
}

// console.log(iAmLocal);  outside scope
console.log(iAmGLobal);
console.log(iAmLocal);


