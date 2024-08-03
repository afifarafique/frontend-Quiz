//Write a function to check if a number is prime.
function check_prime(num){
    if (num % 2 === 0 || num % 3 === 0) {
        console.log("The number ", num ,"is not a prime number");
         return false;
    }
    else{
    
        console.log("The number ", num ,"is a prime number");
         return true
    }
}
console.log(check_prime(7));
console.log(check_prime(8));
console.log(check_prime(11));

//Write a function that returns the factorial of a number.

function factorial(n) {
    if (n < 0) {
         console.log("Factorial for negative no is not possible") ;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(6));
console.log(factorial(8));
console.log(factorial(-1));

//Write a function that takes a string and returns it with the first letter of each word capitalized.
function  capital_word(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}
const hello = "i love pakistan ";
const capital_String = capital_word(hello);
console.log(capital_String);

//Write a function that takes another function as an argument and runs it after a specified delay.
function   Delay(f, delay) {
    setTimeout(f, delay);
}
function intro() {
    console.log("Hello, i am afifa !");
}

Delay(intro, 2000);

//Write a function that takes an array of numbers and returns a new array with each element doubled, but only if the original element was greater than 10.

function double(arr) {
    return arr.map(num => {
        return num > 10 ? num * 2 : num;
    });
}
const input = [5, 12, 8, 20, 15, 2];
const double_arry = double(input );
console.log(double_arry);