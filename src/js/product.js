import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from './ProductDetails.mjs';
import { getParam } from "./utils.mjs";

const product = getParam("product");
console.log(product);
const dataSource = new ProductData("tents");
const productId = getParam('product');

const pd = new ProductDetails(productId, dataSource);
console.log(pd);
pd.init();
console.log(pd.init);

console.log(dataSource.findProductById(productId));

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
