// localStorage.clear();

let cartCounter = localStorage.getItem("cartItemCount");
document.querySelector(".cartCount").innerHTML = cartCounter;

let cartProductsList = JSON.parse(localStorage.getItem("cartProductsList"));
let totalPrice = 0;
document.querySelector(".cartTotalPrice").innerHTML = totalPrice;

renderCartProducts();
getTotalPriceOfCartProducts5();

function renderCartProducts() {
  let htmlProducts = ``;
  cartProductsList.forEach((product, index) => {
    if (product.isAddedToCart) {
      let htmlProduct = `<div class="cartProductDetails">
      <img src=${product.img} alt="" class="cartProdImg">
      <div class="cartProdDetailsColumn">
        <div class="cartProdNamePriceRow">
          <span class="cartProdName">${product.title}</span>
          <span class="cartProdPrice">${product.price} $</span>
        </div>
        <p class="cartProdDesc">${product.desc} </p>
        <div class="cartProdSettingsRow">
          <div class="deleteDiv">
            <i class="fa-solid fa-trash"></i>
            <button onclick="deleteCartProduct(${index})" class="cartDeleteBtn">Delete</button>
          </div>
          <div class="cartProdQuantity">
            <i onclick="decrementQuantity(${index});  decrementCartTotalPrice();" class="fa-solid fa-square-minus"></i>
            <span>${product.quantity}</span>
            <i onclick="incrementQuantity(${index});"  class="fa-solid fa-square-plus"></i>
          </div>
        </div>
      </div>
      </div>`;
      htmlProducts += htmlProduct;
    }
  });
  document.querySelector(".cartDetails").innerHTML = htmlProducts;
}

function decrementQuantity(index) {
  if (cartProductsList[index].quantity > 1) {
    cartProductsList[index].quantity--;

    cartProductsList[index].price -= updateProductPrice(index);
    localStorage.setItem("cartProductsList", JSON.stringify(cartProductsList));
    getTotalPriceOfCartProducts1(index);
    renderCartProducts();
  }
}
function incrementQuantity(index) {
  cartProductsList[index].quantity++;
  cartProductsList[index].price =
    updateProductPrice(index) * cartProductsList[index].quantity;
  localStorage.setItem("cartProductsList", JSON.stringify(cartProductsList));
  getTotalPriceOfCartProducts(index);
  renderCartProducts();
}

// for select the initial price of the product not current price
function updateProductPrice(index) {
  let initialPrice = 0;
  JSON.parse(localStorage.getItem("productsList")).forEach((item) => {
    if (item.id === cartProductsList[index].id) {
      initialPrice = item.price;
    }
  });
  return initialPrice;
}

let productsList = JSON.parse(localStorage.getItem("productsList"));

function deleteCartProduct(index) {
  cartProductsList[index].isAddedToCart = false;
  let productsList = JSON.parse(localStorage.getItem("productsList"));
  console.log(productsList);
  productsList[indexOfProductDeletedFromCart(index)].isAddedToCart = false;
  localStorage.setItem("productsList", JSON.stringify(productsList));
  if (cartCounter >= 1) {
    cartCounter--;
  }
  localStorage.setItem("cartItemCount", cartCounter);
  document.querySelector(".cartCount").innerHTML = cartCounter;
  localStorage.setItem("cartProductsList", JSON.stringify(cartProductsList));
  deletePrice(index);
  renderCartProducts();
}

function indexOfProductDeletedFromCart(ind) {
  let i = 0;
  productsList.forEach((item, index) => {
    if (item.id === cartProductsList[ind].id) {
      i = index;
    }
  });
  return i;
}

// this function calculate the total price in the cart
// document.querySelector(".cartTotalPrice").innerHTML = `${totalPrice} $`;
// cartTotalPrice();
// let totalCartPrice = 0;
// function cartTotalPrice() {
//   totalCartPrice = totalCartPrice + getTotalPricesOfCartProducts();
//   document.querySelector(".cartTotalPrice").innerHTML = `${totalCartPrice} $`;
// }

// function decrementCartTotalPrice() {
//   console.log("gggg");
// }

function getTotalPriceOfCartProducts5() {
  cartProductsList.forEach((item) => {
    totalPrice += item.price;
  });
  document.querySelector(".cartTotalPrice").innerHTML = totalPrice;
  return totalPrice;
}

function deletePrice(index) {
  totalPrice = totalPrice - cartProductsList[index].price;
  document.querySelector(".cartTotalPrice").innerHTML = totalPrice;
}

function getTotalPriceOfCartProducts(index) {
  totalPrice += updateProductPrice(index);
  document.querySelector(".cartTotalPrice").innerHTML = totalPrice;
}
function getTotalPriceOfCartProducts1(index) {
  totalPrice -= updateProductPrice(index);
  document.querySelector(".cartTotalPrice").innerHTML = totalPrice;
}
