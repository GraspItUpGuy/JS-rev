const numbers = [1,2,3,4,5,6];

numbers.shift();
console.log(numbers);


numbers.unshift('inserted');
console.log(numbers);


numbers.push(4);
console.log(numbers);


numbers.pop();
console.log(numbers);
console.log(numbers.pop());
console.log(numbers);

numbers.splice(2,10 ,'add this isntead')
console.log(numbers);
