<template>
  <nav class="shadow-md px-7 py-4 rounded-2xl w-[95%] sm:w-[90vw] m-auto sticky top-[50px] z-[10]">
    <div class="flex-row-justify-between">
      <p class="text-purple-text text-md sm:text-xl md:text-2xl font-semibold cursor-pointer">
        rendezvous
      </p>
      <div class="flex-row-justify-center gap-[40px] desktop text-purple-text font-semibold">
        <a href="#">Discover</a>
        <a href="#">About us</a>
        <a href="#">FAQs</a>
        <a href="#">Contact us</a>
      </div>
      <div class="hamburgers" v-on:click="toggleHamburgers">
        <i class="bi bi-list text-purple text-[20px]" v-if="!showDropDown"></i>
        <i class="bi bi-x-circle" v-else></i>
      </div>
      <div
        class="flex-row-justify-center auth_div gap-[20px] sm:relative"
        :class="{ 'max530:flex': showDropDown, 'max530:hidden': !showDropDown }"
      >
        <p class="cursor-pointer text-purple-text font-semibold">Log in</p>
        <button
          class="bg-purple-button border-0 py-[12px] px-[25px] rounded-xl text-white hover:bg-button-hover transition-all"
        >
          Sign up
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showDropDown: false,
    }
  },
  methods: {
    toggleHamburgers() {
      this.showDropDown = !this.showDropDown
    },
  },
}
</script>

<style></style>
