import { ProductService } from "./product.js";

const productService = new ProductService();
const products = await productService?.getProducts();

const event_div = document.querySelector('.each_event');

const createProductCard = () =>{
    return products?.forEach((product)=>{
        const each_event_div = document.createElement("div");
        each_event_div.className = 'event_cards';
        each_event_div.innerHTML = 
        `<div class="event_card">
           <div class="img_wrapper"><img src=${product?.image} alt="tech4dev" /></div>
            <div class="event_content">
                <p class="event_title">${product?.title}</p>
                <p class="event_date">Sun, Oct 3rd <span class="dot">•</span> 6pm</p>
                <p>${product?.description}
                </p>
                <button>
                    View details
                    <i class="bi bi-arrow-up-right"></i>
                </button>
            </div>
        </div>`;
        event_div.appendChild(each_event_div);
    })
    // return products?.map((product)=>(
    //         each_event_div.innerHTML = 
    //         `<div class="event_card">
    //            <div class="img_wrapper"><img src=${product?.image} alt="tech4dev" /></div>
    //             <div class="event_content">
    //                 <p class="event_title">${product?.title}</p>
    //                 <p class="event_date">Sun, Oct 3rd <span class="dot">•</span> 6pm</p>
    //                 <p>${product?.description}
    //                 </p>
    //                 <button>
    //                     View details
    //                     <i class="bi bi-arrow-up-right"></i>
    //                 </button>
    //             </div>
    //         </div>`
    //     )).join("")
}
createProductCard();
