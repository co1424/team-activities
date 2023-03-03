// import { renderListWithTemplate } from "./utils.mjs";

// ProductList.mjs
function productCardTemplate(product) {
  // console.log(product)
  return `<li class="product-card">
  <a href="product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Image}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`
} 

export default class ProductList {  
    constructor(category, dataSource, listElement) {
      // We passed in this information to make our class as reusable as possible.
      // Being able to define these things when we use the class will make it very flexible
      this.category = category;
      this.dataSource = dataSource;
      this.listElement = listElement;
    }
    async init() {
      // our dataSource will return a Promise...so we can use await to resolve it.
      const list = await this.dataSource.getData();
      // render the list 
      this.renderList(list)
    }
    
     renderList(list) {
      // este id no va "880RT"  "989CG"
      const filteredList = list.filter(id => id.Id != "880RT" && id.Id != "989CG")
      const htmlStrings = filteredList.map(productCardTemplate);
      this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
    }

  }

  
  