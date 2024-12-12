<template>
  <div class="relative min-w-[140px]">
    <div class="shadow_cover z-[2]"></div>
    <p
      class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-2 text-white font-semibold text-xl text-center"
    >
      {{ name }}
    </p>
    <img :src="img" :alt="name" class="h-full object-cover w-full hover:scale-100" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    img: {
      type: String,
    },
  },
}
</script>

<style></style>
