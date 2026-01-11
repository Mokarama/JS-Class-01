
/*let num1=4;

if(num1%2===0){
    console.log("EVEN NUMBER");
}
else{
    console.log("ODD NUMBER")
}
*/

//------------Odd / Even Number------------

/*
function number(num){
    if(num%2===0){
        console.log("Even number")
    }

    else{
        console.log("Odd number")
    }
}
number(2);
number(3);
number(4);
number(5);
*/
// -----Prime NUmber----


let isPrime=true;

function primeNum(num){
 for(let i=2; i<num; i++){
    if(num%i===0){
        isPrime=false;
    }
    if(isPrime){
        return "Prime number";
    }
    else{
        return "Not a prime Number";
    }
 }
}
console.log(primeNum(10));


// --------

const floors=5;
const firstWidth=4;
const widthLess=0.5;



