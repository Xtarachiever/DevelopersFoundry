<script>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
import './assets/tailwind.css'
export default {
  name: 'App',
  components: {
    HomeView,
  },
}
</script>

<template>
  <div class="container">
    <!-- <HomeView /> -->
    <RouterView />
  </div>
</template>

<style>
.container {
  @apply min-w-[280px] m-auto max-w-full;
}
.loader {
  width: 45px;
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(rgba(118, 60, 207, 1) 0 0);
  background:
    var(--c) 0% 50%,
    var(--c) 50% 50%,
    var(--c) 100% 50%;
  animation: l7 1s infinite linear alternate;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@keyframes l7 {
  0% {
    background-size:
      20% 50%,
      20% 50%,
      20% 50%;
  }
  20% {
    background-size:
      20% 20%,
      20% 50%,
      20% 50%;
  }
  40% {
    background-size:
      20% 100%,
      20% 20%,
      20% 50%;
  }
  60% {
    background-size:
      20% 50%,
      20% 100%,
      20% 20%;
  }
  80% {
    background-size:
      20% 50%,
      20% 50%,
      20% 100%;
  }
  100% {
    background-size:
      20% 50%,
      20% 50%,
      20% 50%;
  }
}
</style>
