let sentence="  Js is good   ";


let world =sentence.trim("").split("");
console.log(world);

let newSentence=sentence.replace("good", "bad");
console.log(newSentence);


let sen1="Js is good.";
let sen2="Js is bad.";
let output=sen1.concat(sen2);
console.log(output)
