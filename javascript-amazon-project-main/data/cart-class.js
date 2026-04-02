//class is just a better way of generating objects with the same properties and methods. It is a blueprint for creating objects. It is a template for creating objects. It is a way to define a type of object. It is a way to define a type of object that has certain properties and methods. It is a way to define a type of object that has certain properties and methods that can be shared among all instances of the class.

class Cart {
  cartItems;
  localStorageKey;      //when a propertty is declared without a value, it is undefined and we can uset use ; to it is undefined. We can also assign a default value to it, but in this case we will assign it in the constructor.

  constructor(){
    //basically setup code that runs when we create a new instance of the class.
    this.localStorageKey = 'cart-oop';
    this.loadFromStorage();
  }
  
   loadFromStorage(){
  this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

    if (!this.cartItems) {
      this.cartItems =  [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }];
    }
  }

   saveToStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems))
  }


  addToCart(productId) {
  let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );
    
      const quantity = quantitySelector ? Number(quantitySelector.value) : 1;
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      this.cartItems.push({
      productId: productId,
      quantity: quantity,
      deliveryOptionId: '1'
    }); 
    }

    this.saveToStorage();
  }

  removeFromCart(productId) {
  const newCart = [];

  this.cartItems.forEach((cartItem) => {
    if (cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  this.cartItems = newCart;

  this.saveToStorage();
  }
  

  calculateCartQuantity() {
  let cartQuantity = 0;

  this.cartItems.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
  }
  
   updateQuantity(productId, newQuantity) {
  let matchingItem;

  this.cartItems.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  this.saveToStorage();
  }


  updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
  
  matchingItem.deliveryOptionId = deliveryOptionId;

  this.saveToStorage();
  }
  


};


//each object created from the Cart class will have the same methods and properties as defined in the class. We can create multiple carts with different localStorage keys to manage different sets of cart items.

//and each iteam is called an Instance of the class. 

const cart = new Cart();
const businessCart = new Cart();


 console.log(cart);
 console.log(businessCart);

//we can check if an object is an instance of a class using the instanceof operator.
  console.log(cart instanceof Cart);    // true