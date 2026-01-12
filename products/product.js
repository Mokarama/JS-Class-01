
function product(id, name, price,category) {
    this.id=id;
    this.name=name;
    this.price=price;
    this.category=category;

     let product1=new product(1, "Pen", 200, "Small");
     let product2=new product(2, "Book", 150, "Big");
     let product3=new product(3, "Note", 300, "small");
     let product4=new product(4, "Dress", 800, "Big");
     let product5=new product(5, "Panjabi", 1200, "small");
}
export default product;

