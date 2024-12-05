import { truncateText } from "./functions.js";
import { ProductService } from "./product.js";

const productService = new ProductService();
const products = await productService?.getProducts();

const event_div = document.querySelector('.each_event');

const createProductCard = () =>{
    return products?.forEach((product)=>{
        const each_event_div = document.createElement("div");
        each_event_div.className = 'event_cards';
        each_event_div.innerHTML = 
        `<div class="py-4 h-full hover:scale-105 cursor-pointer transition-all border border-light-gray rounded-lg">
           <div class="max-h-[200px] overflow-clip pt-3"><img src=${product?.image} alt="tech4dev" class="object-contain h-[200px] w-full"/></div>
            <div class="px-6 pt-4">
                <p class="font-semibold">${product?.title}</p>
                <p class="pb-3">Sun, Oct 3rd <span class="px-1">•</span> 6pm</p>
                <p>${truncateText(product?.description,100)}
                </p>
                <button class="view_details_${product?.id} bg-transparent border-none pt-[15px] text-purple-text cursor-pointer hover:text-button-hover cursor-pointer font-semibold" >
                    View details
                    <i class="bi bi-arrow-up-right"></i>
                </button>
            </div>
        </div>`;
        event_div.className = 'grid sm:grid-cols-2 lg:grid-cols-3 py-[25px] gap-6'
        event_div.appendChild(each_event_div);

        // href="/productDetails.html" _blank

        const viewDetails = document.querySelector(`.view_details_${product?.id}`);
        viewDetails.addEventListener('click',async ()=>{
            window.location.href = `/productDetails.html?id=${product?.id}`;
            // if(product?.id){
            //     await getSingleProductDetails(product?.id);
            // }
        })
    })
}

createProductCard();