<script>
import { RouterLink, RouterView } from 'vue-router'
import './assets/tailwind.css'
export default {
  data() {
    return {}
  },
}
</script>

<template>
  <div class="">hiiii</div>
  <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  <RouterView />
</template>

<style scoped></style>
