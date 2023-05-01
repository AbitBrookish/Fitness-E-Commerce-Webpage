// create class 
class ProductsController {
  constructor(currentId) {
    this.product = [];
    currentId = 0;
    this.id = currentId;
  }

  addProduct(category, name, description, manufacturer) {
    this.id++;
    const item = {category, name, description, manufacturer};
    this.product.push(item);
  }
}

// test class
const Shoes = new ProductsController;
Shoes.addProduct('womens apparel', 'ultra-bounce runner', 'lightweight shoes meant for speedwalking and jogging', 'Nike');
console.log(Shoes);

const Pants = new ProductsController;
Pants.addProduct('mens apparel', 'flex runner', 'Thin fabric', 'Fabletics Men');
console.log(Pants);

const Watch = new ProductsController;
Watch.addProduct('accessories', 'apple watch', 'apple watch', 'Apple');
console.log(Watch);

const Bra = new ProductsController;
Bra.addProduct('womens apparel', 'The Holder', 'They hold them in place so you don\'t have to', 'Shien');
console.log(Bra);
