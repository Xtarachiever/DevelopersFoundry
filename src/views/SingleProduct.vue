<script>
import NavBar from '../components/NavBar.vue'
export default {
  data() {
    return {
      product: null,
      // id: this.$route.params.id,
      isLoading: false,
      url: 'https://fakestoreapi.com/products',
      productsLength: 0,
    }
  },
  components: {
    NavBar,
  },
  props: ['id'],
  methods: {
    async viewDetails() {
      this.isLoading = true
      try {
        const res = await this.axios.get(`${this.url}/${this.id}`)
        this.product = res.data
      } catch (err) {
        console.log(err?.message)
      } finally {
        this.isLoading = false
      }
    },
    async getProductsLength() {
      this.isLoading = true
      try {
        const res = await this.axios.get(`${this.url}`)
        this.productsLength = res.data.length
      } catch (err) {
        console.log(err?.message)
      } finally {
        this.isLoading = false
      }
    },
    async getNextProduct() {
      this.isLoading = true
      try {
        const nextId = +this.id + 1
        if (nextId <= this.productsLength) {
          const res = await this.axios.get(`${this.url}/${+this.id + 1}`)
          this.$router.push({ name: 'SingleProduct', params: { id: nextId } })
          this.product = res.data
        }
      } catch (err) {
        console.log(err?.message)
      } finally {
        this.isLoading = false
      }
    },
    async getPrevProduct() {
      this.isLoading = true
      try {
        const prevId = +this.id - 1
        if (prevId > 0) {
          const res = await this.axios.get(`${this.url}/${+this.id + 1}`)
          this.$router.push({ name: 'SingleProduct', params: { id: prevId } })
          this.product = res.data
        }
      } catch (err) {
        console.log(err?.message)
      } finally {
        this.isLoading = false
      }
    },
  },
  mounted() {
    this.viewDetails()
    this.getProductsLength()
  },
  watch: {
    id(newId) {
      this.viewDetails()
    },
  },
}
</script>

<template>
  <div class="pb-[50px] mb-[50px]">
    <NavBar />
    <div class="relative h-[40vh]" v-if="isLoading">
      <div class="loader"></div>
    </div>
    <div class="mt-14 w-[90%] m-auto relative pb-12" v-else-if="product">
      <div class="w-full py-4 shadow-lg">
        <img
          :src="product.image"
          alt="event_1"
          class="max-w-[200px] sm:max-w-[300px] w-full m-auto"
        />
      </div>
      <div>
        <div
          class="main_container flex flex-col md:flex-row justify-between items-end gap-[20px] pt-6 pb-4 sm:pb-0"
        >
          <div class="p-[20px] w-full md:w-[60%] lg:w-[70%]">
            <p class="font-semibold text-xl py-2">{{ product.title }}</p>
            <div class="specific_event_details">
              <div class="flex items-center gap-[20px]">
                <p><i class="bi bi-calendar"></i> <span>Sunday, October 3rd, 2023</span></p>
                <p><i class="bi bi-clock"></i> <span>6PM</span></p>
              </div>
              <p>
                <i class="bi bi-geo-alt text-xl"></i>
                <span
                  >Race Course, 8/9 Marina, Onikan, Lagos Lagos, 4aa Force Rd, Lagos Island 102273,
                  Lagos</span
                >
              </p>
              <p><i class="bi bi-person text-2xl"></i><span>FK, Jollz</span></p>
              <p class="product_rating"><span>Rating:</span> {{ product?.rating?.rate }} / 5.0</p>
            </div>
            <div class="text-[16px] pt-6">
              <p class="font-semibold mb-2">Event description</p>
              <p class="pb-[40px]">{{ product.description }}</p>
            </div>
            <div class="pt-6">
              <p class="font-semibold pb-3">Tickets Pricing</p>
              <div class="flex items-center gap-[40px] pb-10">
                <div>
                  <p>Single</p>
                  <p class="text-primary font-semibold">NGN{{ Math.ceil(product.price) }}</p>
                </div>
                <div>
                  <p>Pair</p>
                  <p class="text-primary font-semibold">
                    NGN {{ Math.ceil(product?.price * 2 - product?.price * 2 * 0.1) }}
                  </p>
                </div>
              </div>
              <button
                class="bg-purple-button border-0 py-[10px] px-[40px] rounded-lg text-white font-semibold hover:bg-button-hover transition-all"
              >
                Buy Now
              </button>
            </div>
          </div>
          <div
            class="contact_div w-full md:w-[40%] lg:w-[30%] flex items-start flex-col p-[20px] justify-end"
          >
            <div class="contact_us pb-3">
              <p class="font-semibold py-4">Contact Organizers</p>
              <div class="contact_icons">
                <i class="bi bi-envelope-fill"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-instagram"></i>
              </div>
            </div>
            <div class="pt-6 w-full h-full text-left min-h-[250px]">
              <p class="font-semibold pb-3">Directions</p>
              <div class="relative w-full h-full min-h-[300px] max-h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.615574213267!2d3.3988596743937305!3d6.443381993547897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bd384cdf87b%3A0xc83383bffdab3596!2sMuson%20Centre!5e0!3m2!1sen!2sng!4v1733253941423!5m2!1sen!2sng"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div
          class="navigation_button absolute gap-[40px] right-[40px] -bottom-[20px] xl:-bottom-[40px] flex pt-4"
        >
          <i class="bi bi-arrow-left-circle text-purple-button" @click="getPrevProduct"></i>
          <i class="bi bi-arrow-right-circle text-purple-button" @click="getNextProduct"></i>
        </div>
      </div>
    </div>
    <div v-else class="pt-[100px] text-center">Product Not Found</div>
  </div>
</template>

<style scoped>
.main_container .contact_div .contact_us .contact_icons {
  @apply my-[8px] gap-[20px] flex items-center justify-center;
}
.main_container .contact_div .contact_us .contact_icons .bi {
  @apply bg-purple-button text-white py-[6px] px-[10px] rounded-lg cursor-pointer;
}
.main_container .contact_div .contact_us .contact_icons .bi:hover {
  @apply scale-102 transition-all duration-200 ease-in-out;
}
.specific_event_details p {
  @apply flex items-center gap-[10px] font-[300] py-1;
}
.specific_event_details p .bi {
  @apply text-purple-text;
}
.navigation_button .bi {
  font-size: 34px;
  cursor: pointer;
}
</style>
