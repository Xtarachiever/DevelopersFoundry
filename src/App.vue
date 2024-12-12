<script>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
import './assets/tailwind.css'
export default {
  data() {
    return {}
  },
  components: {
    HomeView,
  },
}
</script>

<template>
  <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  <div class="container">
    <HomeView />
  </div>
  <!-- <RouterView /> -->
</template>

<style scoped>
.container {
  @apply min-w-[280px] m-auto max-w-full;
}
</style>
