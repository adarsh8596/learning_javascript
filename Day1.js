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