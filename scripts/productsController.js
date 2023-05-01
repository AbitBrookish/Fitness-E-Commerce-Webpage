// create class 
class ProductsController {
  constructor() {
    this.product = [];
    this.currentId = 0;
  }

  addProduct(category, name, description, manufacturer) {
    this.currentId++;
    this.product.push(category, name, description, manufacturer);
  }
}

// test class
const Shoes = new ProductsController;
// console.log(Shoes);
Shoes.addProduct('womens apparel', 'ultra-bounce runner', 'lightweight shoes meant for speedwalking and jogging', 'Nike');
console.log(Shoes);