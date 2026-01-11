// let array=[1, 2, 3,4,5];
// array.forEach((els)=>console.log(els));


//EVEN /ODD number
let odd=[];
let even=[];

let array=[1,2,3,10,15];

for(let i=0; i<array.length; i++){
  let num=array[i];

  if(num%2===0){
    even.push(num);
}

else{
     odd.push(num);
}

}
console.log("even number", even);
console.log("Odd number", odd);





//slice
let name=['Jenifa', 'Sabbir', 'Maisha', 'Urmi', 'Mahi', 'Rima'];

let result=name.slice(1,3);
console.log(result);

//splice

let name1=['Jenifa', 'Sabbir', 'Maisha', 'Urmi', 'Mahi', 'Rima'];

let result1=name.splice(1,3);
console.log(result1);


//sort
let name5=['Jenifa', 'Sabbir', 'Maisha', 'Urmi', 'Mahi', 'Rima'];
let num1=[20, 40, 50,5,4,7,9];
let finalNum=num1.sort((a,b)=>a-b);
console.log(finalNum,"sort number");
let result5=name5.sort((a,b)=>a-b);
console.log(result5);

//map
const numbers=[23,56,78,90,1,2,5,8,78];
const newNumbers=numbers.map((n)=>console.log(n));


//
