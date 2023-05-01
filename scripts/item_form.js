const productsController = new ProductsController;

// declare variables
const submit = document.querySelector('#form-submit');

// create function that takes values from form and calls .addItem() 
const completedForm = () => {
  // select inputs
  const newCategory = document.querySelector('#category'); 
  const newItemName = document.querySelector('#item-name');
  const newDescription = document.querySelector('#description');
  const newManufacturer = document.querySelector('#manufacturer');
  const newImg = document.querySelector('#photo');

  // select input values
  const category = newCategory.value;
  const itemName = newItemName.value;
  const description = newDescription.value;
  const manufacturer = newManufacturer.value;
  const photo = newImg.value;

  // create time stamp for submission
  const timestamp = {
    time: new Date().getTime(),
  }

  // validation code before creating new instance of product and clearing form
  if(itemName===null || itemName === '') {
    alert('Please enter a name for this product.');
    return false;
  }
  if(description === null || description === '') {
    alert('Please enter a description for this product.');
    return false;
  }
  if(manufacturer === null || manufacturer === '') {
    alert('Please enter a manufacturer for this product.');
    return false;
  }
  // ****************************************************************

  // add values to addProduct()
  productsController.addProduct(category, itemName, description, manufacturer, photo, timestamp);

  // clear inputs for next submission
  newCategory.value = '';
  newItemName.value = '';
  newDescription.value = '';
  newManufacturer.value = '';
  newImg.value = '';
}

// create eventListener for the submit event
submit.addEventListener('click', completedForm);