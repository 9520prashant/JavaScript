// Hoisting is technique in JavaScript by using it, we can access variables and functions even before we have initialised it or we have put some value in it.

// Hoisting when getName as normal function

getName();
console.log(x);
console.log(getName);

var x = 7;

console.log(getName);
function getName(){
    console.log('Hello');
}


// Hoisting when getName as arrow function

getName();
console.log(x);
console.log(getName);

var x = 7;

console.log(getName);
const getName=()=>{
    console.log('Hello');
}
