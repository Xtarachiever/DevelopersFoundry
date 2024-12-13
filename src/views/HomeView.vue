<script>
import NavBar from '../components/NavBar.vue'
import BannerSection from '../components/BannerSection.vue'
import ProductSection from '../components/ProductSection.vue'
import DiscoverEvents from '../components/DiscoverEvents.vue'
import CustomFooter from '../components/Footer.vue'
export default {
  components: {
    NavBar,
    BannerSection,
    ProductSection,
    DiscoverEvents,
    CustomFooter,
  },
}
</script>

<template>
  <div class="relative">
    <div class="min-h-[100vh] pb-[300px]">
      <NavBar />
      <BannerSection />
      <ProductSection />
      <DiscoverEvents />
    </div>
    <CustomFooter />
  </div>
</template>

<style scoped></style>
