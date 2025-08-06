const prompt=require("prompt-sync")({sigint:true}); 
// function to reverese the number:
let num=0;

function reverse_number(n){
    while(n%10!==0){
        num=num*10+n%10;
        n=Math.floor(n/10);
    }
    console.log("num is:",num);
}

reverse_number(123);

// Program to add, subtract, multiply,divide two number

let a = 10;
let b = 20;

console.log("sum of a & b is:",(a+b));
console.log("subtraction of a & b is:",(a-b));
console.log("Multiplication of a & b is:",(a*b));
console.log("Division of a & b is:",(a/b));

// to check if both numbers are equal:
console.log("is a equal to b:",a===b);
console.log("is a not equal to b:",a!==0);

// Mini Project:

let userName=prompt("Enter name");
let age = prompt("Enter age");
console.log("Hello",userName,"next year you will be",(age+1),"year old");
