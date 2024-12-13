<template>
  <section class="sm:pb-[40px]">
    <div class="events pt-10 m-auto max-w-[1800px]">
      <div class="trending_event_header">
        <p class="text-[20px] font-semibold">Trending events</p>
        <a href="#" class="text-purple-text trending_event_header_link"
          >View all trending events <i class="bi bi-arrow-up-right"></i
        ></a>
      </div>
      <div class="relative h-[40vh]" v-if="isLoading">
        <div class="loader"></div>
      </div>
      <div
        v-else-if="products.length"
        class="grid grid-column-repeat lg:lg:grid-cols-3 gap-[30px] py-8"
      >
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
      <div v-else>No products found</div>
    </div>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  data() {
    return {
      products: [],
      isLoading: false,
    }
  },
  components: {
    ProductCard,
  },
  methods: {
    async fetchProducts(url) {
      this.isLoading = true
      try {
        const res = await this.axios.get(`https://fakestoreapi.com/products/${url ? url : ''}`)
        this.products = res.data
      } catch (err) {
        console.log(err?.message)
      } finally {
        this.isLoading = false
      }
    },
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>

<style></style>
