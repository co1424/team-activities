import{s,a as n}from"./utils.2952622c.js";/* empty css              */function l(t){if(t.ok)return t.json();throw new Error("Bad Response")}class u{constructor(o){this.category=o,this.path=`../json/${this.category}.json`,console.log(this.path)}getData(){return fetch(this.path).then(l).then(o=>o)}async findProductById(o){const a=await this.getData();console.log(a),console.log(o);const c=a.find(i=>i.Id===o);return console.log(c),c}}function h(t){return`<section class="product-detail"> <h3>${t.Brand.Name}</h3>
    <h2 class="divider">${t.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${t.Image}"
      alt="${t.NameWithoutBrand}"
    />
    <p class="product-card__price">$${t.FinalPrice}</p>
    <p class="product__color">${t.Colors[0].ColorName}</p>
    <p class="product__description">
    ${t.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${t.Id}">Add to Cart</button>
    </div></section>`}class p{constructor(o,a){this.productId=o,this.product={},this.dataSource=a}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails("main"),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){s("so-cart",this.product)}renderProductDetails(o){document.querySelector(o).insertAdjacentHTML("afterBegin",h(this.product))}}const m=n("product");console.log(m);const e=new u("tents"),r=n("product"),d=new p(r,e);console.log(d);d.init();console.log(d.init);console.log(e.findProductById(r));function g(t){s("so-cart",t)}async function f(t){const o=await e.findProductById(t.target.dataset.id);g(o)}document.getElementById("addToCart").addEventListener("click",f);
