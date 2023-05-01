// create class 
class ProductsController {
  constructor(currentId = 0) {
    // set constructor for class
    this.product = [];
    this.id = currentId;
  }

  addProduct(category, name, description, manufacturer, img) {
    const item = {
      // increment the id property
      id: this.id++,
      category: category,
      name: name,
      description: description,
      manufacturer: manufacturer,
      img: img
    };

    this.product.push(item);
  }
}

// test class instances

// create new instance of products
// const controller = new ProductsController();

// // add products to each
// controller.addProduct('women', 'runners', 'hightop', 'Adidas', '/img/shoes.png');
// controller.addProduct('women', 'yo-gahs', 'stretchy', 'Nike', '/img/pants.png');
// controller.addProduct('products', 'Tylenol', 'BigPharma', '/img/vitamin.png');

// // log instances to console
// console.log(controller);