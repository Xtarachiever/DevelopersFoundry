<script>
import NavBar from '../components/NavBar.vue'
import BannerSection from '../components/BannerSection.vue'
import ProductSection from '../components/ProductSection.vue'
import DiscoverEvents from '../components/DiscoverEvents.vue'
import Footer from '../components/Footer.vue'
export default {
  data() {
    return 'Hello'
  },
  components: {
    NavBar,
    BannerSection,
    ProductSection,
    DiscoverEvents,
    Footer,
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
    <Footer />
  </div>
</template>

<style scoped></style>
