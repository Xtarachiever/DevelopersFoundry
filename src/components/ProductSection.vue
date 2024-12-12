<template>
  <section class="sm:pb-[40px]">
    <div class="events pt-10 w-[90%] m-auto max-w-[1800px]">
      <div class="trending_event_header">
        <p class="text-[20px] font-semibold">Trending events</p>
        <a href="#" class="text-purple-text trending_event_header_link"
          >View all trending events <i class="bi bi-arrow-up-right"></i
        ></a>
      </div>
      <div class="grid grid-column-repeat lg:lg:grid-cols-3 gap-[30px] py-8">
        <ProductCard
          v-for="product in products"
          :name="product?.name"
          :img="product?.img"
          :description="product.description"
          :key="product?.name"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  data() {
    return {
      products: [
        {
          img: '/event_1.jpg',
          name: 'ISWIS Live show',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          img: '/event_2.jpeg',
          name: 'ISWIS Live show',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          img: '/event_3.png',
          name: 'ISWIS Live show',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          img: '/event_1.jpg',
          name: 'ISWIS Live show',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ],
    }
  },
  components: {
    ProductCard,
  },
}
</script>

<style></style>
