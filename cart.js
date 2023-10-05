// localStorage.clear();
let cartCounter = localStorage.getItem("cartItemCount");
document.querySelector(".cartCount").innerHTML = cartCounter;

let cartProductsList = JSON.parse(localStorage.getItem("cartProductsList"));
renderCartProducts();
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
            <i onclick="decrementQuantity(${index});" class="fa-solid fa-square-minus"></i>
            <span>${product.quantity}</span>
            <i onclick="incrementQuantity(${index});"  class="fa-solid fa-square-plus"></i>
          </div>
        </div>
      </div>
      </div>`;
      htmlProducts += htmlProduct;
    } else {
      document.querySelector(".cartDetails").innerHTML = "nothing here";
    }
  });
  document.querySelector(".cartDetails").innerHTML = htmlProducts;
}
function decrementQuantity(index) {
  if (cartProductsList[index].quantity > 1) {
    cartProductsList[index].quantity--;
    localStorage.setItem("cartProductsList", JSON.stringify(cartProductsList));
    renderCartProducts();
  }
}
function incrementQuantity(index) {
  cartProductsList[index].quantity++;
  updateProductPrice(index);
  localStorage.setItem("cartProductsList", JSON.stringify(cartProductsList));
  renderCartProducts();
}

function updateProductPrice(index) {
  JSON.parse(localStorage.getItem("productsList")).forEach((item) => {
    if (item.id === cartProductsList[index].id) {
      let initialPrice = item.price;
      cartProductsList[index].price =
        initialPrice * cartProductsList[index].quantity;
    }
  });
}

// document
//   .querySelector(".cartDeleteBtn")
//   .addEventListener("click", () => deleteCartProduct());

function deleteCartProduct(index) {
  console.log("removed");
  cartProductsList.splice(index, 1);
  cartCounter--;
  localStorage.setItem("cartItemCount", cartCounter);
  document.querySelector(".cartCount").innerHTML = cartCounter;
  localStorage.setItem("cartProductsList", JSON.stringify(cartProductsList));
  renderCartProducts();
}
