import { ProductService } from "./product.js";
const productService = new ProductService();

const each_event_div = document.querySelector('.each_product_details');

const getSingleProductDetails = async (id) =>{
    const productById = await productService.getProductById(id);
    each_event_div.innerHTML = `
    <div class="product_div">
        <button><i class="bi bi-arrow-counterclockwise"></i></button>
        <div class="img_div"><img src=${productById?.image} alt=${productById?.title}/></div>
        <div class="details">
           <p class="product_title">${productById?.title}</p>
           <p class="product_description"><span>Description:</span> ${productById?.description}</p>
           <p class="product_price"><span>Price:</span> ${productById?.price}</p>
           <p class="product_rating"><span>Rating:</span> ${productById?.rating?.rate} / 5.0</p>
        </div>
    </div>
    `;
}

if(window?.location?.href){
    const id = window?.location?.href.split("?")[1]?.split("=")[1];
    getSingleProductDetails(id);
}