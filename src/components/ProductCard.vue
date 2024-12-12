<template>
  <div
    class="pb-4 h-full hover:scale-102 cursor-pointer transition-all border border-light-gray rounded-xl overflow-clip"
  >
    <div class="max-h-[200px]">
      <img :src="img" alt="tech4dev" class="object-cover h-[200px] w-full" />
    </div>
    <div class="px-6 pt-4">
      <p class="font-semibold">{{ name }}</p>
      <p class="text-xs uppercase pb-3 pt-1">
        Sun, Oct 3rd<span class="px-1">•</span><span class="px-1">6pm</span>
      </p>
      <p>
        {{ description }}
      </p>
      <button
        class="bg-transparent border-none pt-[15px] text-purple-text cursor-pointer hover:text-button-hover cursor-pointer font-semibold"
      >
        View details
        <i class="bi bi-arrow-up-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
    },
  },
}
</script>

<style></style>
