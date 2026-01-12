// let product=[
//   {name:"pen",
//     price:230,
//     category:"Pin-point"
//   },

//   {name:"Note",
//     price:200,
//     category:"Small"
//   },
//   {name:"book",
//     price:250,
//     category:"Big book"
//   }
// ]
// const productSort=product.sort((a,b)=>a.price-b.price);
// const productSort1=product.sort((a,b)=>b.price-a.price);

// console.log(productSort);
// console.log(productSort1);


let productsData=[
  {name:"pen",
    price:230,
    category:"Pin-point"
  },

  {name:"Note",
    price:200,
    category:"Small"
  },
  {name:"book",
    price:250,
    category:"Big book"
  },
  {name:"pen",
    price:230,
    category:"Pin-point"
  },

  {name:"Note",
    price:200,
    category:"Small"
  },
  {name:"book",
    price:250,
    category:"Big book"
  },
  {name:"pen",
    price:230,
    category:"Pin-point"
  },

  {name:"Note",
    price:200,
    category:"Small"
  },
  {name:"book",
    price:250,
    category:"Big book"
  },
  
  {name:"Note",
    price:200,
    category:"Small"
  },
  {name:"book",
    price:250,
    category:"Big book"
  }
]


const productDataRes=productsData.category.includes("Big book");
console.log(productDataRes,"productData");