import  ProductData  from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const pd = new ProductData("tents");
const listElement = document.querySelector(".product-list");

const pl = new ProductList("tents", pd, listElement);
// console.log("mis productos");
// console.log("mis productos");
// console.log("mis productos");
// console.log(pl);
pl.init();

// console.log(await pd.getData());
