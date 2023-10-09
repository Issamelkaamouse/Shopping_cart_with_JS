// localStorage.clear();

let cartCounter = parseInt(localStorage.getItem("cartItemCount")) || 0;

document.querySelector(".cartCount").innerHTML = cartCounter;

let cartProductsList = JSON.parse(localStorage.getItem("cartProductsList"));
// parseInt(localStorage.getItem("totalPrice")) ||
let totalPrice = getTotal("DEFAULT");
document.querySelector(".cartTotalPrice").innerHTML = totalPrice;
renderCartProducts();

function renderCartProducts() {
  let htmlProducts = ``;
  cartProductsList.forEach((product, index) => {
    if (product.isAddedToCart) {
      htmlProducts += generateHtmlCartProducts(product, index);
    }
  });
  localStorage.setItem("totalPrice", totalPrice);
  document.querySelector(".cartTotalPrice").innerHTML = totalPrice;
  document.querySelector(".cartDetails").innerHTML = htmlProducts;
}

function generateHtmlCartProducts(product, index) {
  return `<div class="cartProductDetails">
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
}

function decrementQuantity(index) {
  if (cartProductsList[index].quantity > 1) {
    cartProductsList[index].quantity--;

    cartProductsList[index].price -= updateProductPrice(index);
    localStorage.setItem("cartProductsList", JSON.stringify(cartProductsList));
    getTotal("DECCREMENT_CART_PRICE", index);
    renderCartProducts();
  }
}
function incrementQuantity(index) {
  cartProductsList[index].quantity++;
  cartProductsList[index].price =
    updateProductPrice(index) * cartProductsList[index].quantity;
  localStorage.setItem("cartProductsList", JSON.stringify(cartProductsList));
  getTotal("INCREMENT_CART_PRICE", index);
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
  productsList[indexOfProductDeletedFromCart(index)].isAddedToCart = false;
  localStorage.setItem("productsList", JSON.stringify(productsList));
  if (cartCounter >= 1) {
    cartCounter--;
  }
  localStorage.setItem("cartItemCount", cartCounter);
  document.querySelector(".cartCount").innerHTML = cartCounter;
  localStorage.setItem("cartProductsList", JSON.stringify(cartProductsList));

  getTotal("DELETE_CART_PRICE", index);
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

function getTotal(action, index = null) {
  if (action === "DEFAULT") {
    let totalCartPrice = 0;
    cartProductsList.forEach((item) => {
      totalCartPrice += item.price;
    });
    return totalCartPrice;
  }
  if (action === "INCREMENT_CART_PRICE") {
    totalPrice += updateProductPrice(index);
    localStorage.setItem("totalPrice", totalPrice);

    document.querySelector(".cartTotalPrice").innerHTML = totalPrice;
  }
  if (action === "DECCREMENT_CART_PRICE") {
    totalPrice -= updateProductPrice(index);
    localStorage.setItem("totalPrice", totalPrice);

    document.querySelector(".cartTotalPrice").innerHTML = totalPrice;
  }
  if (action === "DELETE_CART_PRICE") {
    totalPrice = totalPrice - cartProductsList[index].price;
    cartProductsList.splice(index, 1);
    localStorage.setItem("cartProductsList", JSON.stringify(cartProductsList));
    localStorage.setItem("totalPrice", totalPrice);
    document.querySelector(".cartTotalPrice").innerHTML = totalPrice;
  }
}
