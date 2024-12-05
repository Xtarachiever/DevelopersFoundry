import { ProductService } from "./product.js";
const productService = new ProductService();

const each_event_div = document.querySelector(".each_product_details");

const getSingleProductDetails = async (id) => {
  const productById = await productService.getProductById(id);
  const products = await productService?.getProducts();
  // <button class="arrow_counterclockwise"><i class="bi bi-arrow-counterclockwise"></i><span>Back</span></button>
  // <div class="home_link"><a href="/" ><i class="bi bi-house"></i><span>Home</span></a></div>
  each_event_div.innerHTML = `
        <div class="product_div relative pb-4 md:pb-2">
          <div class=" w-full py-4 shadow-lg"><img src=${
            productById?.image
          } alt=${productById?.title} class="max-w-[200px] sm:max-w-[300px] w-full m-auto"/></div>
            <div class="main_container flex flex-col md:flex-row justify-between items-end gap-[20px] pb-4 sm:pb-0">
              <div class="details p-[20px] w-full md:w-[60%] lg:w-[70%]">
                <p class="font-semibold text-xl py-2 ">${productById?.title}</p>
                <div class="specific_event_details">
                <div class="flex items-center gap-[20px]">
                    <p><i class="bi bi-calendar"></i> <span>Sunday, October 3rd, 2023</span></p>
                    <p><i class="bi bi-clock"></i> <span>6PM</span></p>
                  </div>
                  <p><i class="bi bi-geo-alt text-xl"></i> <span>Race Course, 8/9 Marina, Onikan, Lagos Lagos, 4aa Force Rd, Lagos Island 102273, Lagos</span></p>
                  <p><i class="bi bi-person text-2xl"></i><span>FK, Jollz</span></p>
                  <p class="product_rating"><span>Rating:</span> ${
                    productById?.rating?.rate
                  } / 5.0</p>
                </div>
                <div class="text-[16px] py-5"><p class="font-semibold mb-2">Event description</p> <span>${
                  productById?.description
                }</span></div>
                <div class="pt-6">
                <p class="font-semibold">Tickets Pricing</p>
                <div class="flex items-center gap-[40px] pb-10">
                  <div>
                    <p>Single</p>
                    <p class="text-primary font-semibold">NGN ${Math.ceil(
                      productById?.price
                    )}</p>
                  </div>
                  <div>
                    <p>Pair</p>
                    <p class="text-primary font-semibold">NGN ${Math.ceil(
                      productById?.price * 2 - productById?.price * 2 * 0.1
                    )}</p>
                  </div>
                </div>
                <button class="bg-purple-button border-0 py-[10px] px-[40px] rounded-lg text-white font-semibold hover:bg-button-hover transition-all">Buy Now</button>
                </div>
              </div>
              <div class="contact_div w-full md:w-[40%] lg:w-[30%] flex items-start flex-col p-[20px] justify-end">
                <div class="contact_us pb-6">
                  <p class="font-semibold py-4">Contact Organizers</p>
                  <div class="contact_icons">
                    <i class="bi bi-envelope-fill"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                  </div>
                </div>
                <div class="pt-6 w-full h-full text-left min-h-[250px] overflow-scroll">
                  <p class="font-semibold pb-3">Directions</p>
                  <div class="relative w-full h-[500px] min-h-[300px] max-h-[450px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.615574213267!2d3.3988596743937305!3d6.443381993547897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bd384cdf87b%3A0xc83383bffdab3596!2sMuson%20Centre!5e0!3m2!1sen!2sng!4v1733253941423!5m2!1sen!2sng" style="border:0; height:100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="absolute top-0 left-0 w-full"></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div class="navigation_button absolute gap-[40px] right-[40px] -bottom-[20px] xl:-bottom-[40px] flex gap-[20px]">
                <i class="bi bi-arrow-left-circle text-purple-button"></i>
                <i class="bi bi-arrow-right-circle text-purple-button"></i>
            </div>
        </div>
        `;
  // const backArrow = document.querySelector(".arrow_counterclockwise");
  // backArrow.addEventListener("click", async () => {
  //   history.back();
  // });
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
