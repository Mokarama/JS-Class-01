import products from "./product.js";

// let lowToHigh=[...products].sort((a,b)=>a.price-b.price);
// let highToLow=[...products].sort((a,b)=>a.price-b.price);
// console.log(products);


const cart=[];

function addToCart(products){
  cart.push(products);
};

addToCart(products[2]);
console.log(cart);