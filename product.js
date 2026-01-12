
function product(id, name, price,category){
    this.id=id;
    this.name=name;
    this.price=price;
    this.category=category;
};

   let p5 =new product(1, "Pen", 200, "Small");
   let p1 = new product(2, "Book", 150, "Big");
   let p2 = new product(3, "Note", 300, "small");
   let p3 = new product(4, "Dress", 800, "Big");
   let p4 = new product(5, "Panjabi", 1200, "small");
const products=[
    p1, p2, p3, p4,p5
]

export default products;

