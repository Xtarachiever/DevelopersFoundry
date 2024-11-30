import { ProductService } from "./product.js";
const productService = new ProductService();

const each_event_div = document.querySelector(".each_product_details");

const getSingleProductDetails = async (id) => {
  const productById = await productService.getProductById(id);
  const products = await productService?.getProducts();
  each_event_div.innerHTML = `
        <div class="product_div">
            <button class="arrow_counterclockwise"><i class="bi bi-arrow-counterclockwise"></i><span>Back</span></button>
            <div class="img_div"><img src=${productById?.image} alt=${productById?.title}/></div>
            <div class="details">
               <p class="product_title">${productById?.title}</p>
               <p class="product_description"><span>Description:</span> ${productById?.description}</p>
               <p class="product_price"><span>Price:</span> ${productById?.price}</p>
               <p class="product_rating"><span>Rating:</span> ${productById?.rating?.rate} / 5.0</p>
            </div>
            <div class="navigation_button">
                <i class="bi bi-arrow-left-circle"></i>
                <i class="bi bi-arrow-right-circle"></i>
            </div>
        </div>
        `;
  const backArrow = document.querySelector(".arrow_counterclockwise");
  backArrow.addEventListener("click", async () => {
    history.back();
  });
  const prevArrow = document.querySelector(".bi-arrow-left-circle");
  const nextArrow = document.querySelector(".bi-arrow-right-circle");
  prevArrow.addEventListener("click", async () => {
    let newId = +id - 1;
    if (newId !== 0) {
        getSingleProductDetails(newId);
        window.location.href = `/productDetails.html?id=${newId}`;
    }
  });

  nextArrow.addEventListener("click", async () => {
    let newId = Number(id) + 1;
    if (newId <= products.length) {
        getSingleProductDetails(newId);
        window.location.href = `/productDetails.html?id=${newId}`;
    }
  });
};

if (window?.location?.href) {
  const id = window?.location?.href.split("?")[1]?.split("=")[1];
  getSingleProductDetails(id);
}
