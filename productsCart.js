class Store {
  categories = {};
  products = {};

  addCategory = (id, name) => this.categories[id] = name;

  addProduct = (id, name, price, catId, qty) => {
    if (!this.categories[catId]) return;
    this.products[id] = { id, name, price, cat: this.categories[catId], qty };
  };

  show = () =>
    console.table(Object.values(this.products).map(p => ({
      ID: p.id,
      Name: p.name,
      Price: p.price,
      Category: p.cat,
      Stock: p.qty
    })));
}

class Cart {
  items = [];

  add = ({ name, price, qty }, q) =>
    qty >= q
      ? (this.items.push({ name, price, q }), qty -= q)
      : console.log("Out of stock");

  show = () =>
    this.items.forEach(i =>
      console.log(`${i.name} x${i.q} = $${i.price * i.q}`)
    );

  total = () =>
    this.items.reduce((t, i) => t + i.price * i.q, 0);
}
const store = new Store();
const cart = new Cart();

store.addCategory(1, "Food");
store.addCategory(2, "IT");

store.addProduct(1, "Apple", 2, 1, 100);
store.addProduct(2, "Laptop", 1200, 2, 5);

cart.add(store.products[1], 10);
cart.add(store.products[2], 1);

cart.show();
console.log("Total:", cart.total());
store.show();
