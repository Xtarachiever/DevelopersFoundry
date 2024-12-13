<template>
  <div
    class="pb-4 h-full hover:scale-102 cursor-pointer transition-all border border-light-gray rounded-xl overflow-clip"
  >
    <div class="max-h-[200px] overflow-clip">
      <img :src="product.image" :alt="product.name" class="h-full w-[250px] m-auto" />
    </div>
    <div class="px-6 pt-4">
      <p class="font-semibold">{{ product.name }}</p>
      <p class="text-xs uppercase pb-3 pt-1">
        {{ product.category }}
        <span class="px-1">•</span>
        <span class="px-1">{{ product.rating.rate }} / 5.0 </span>
      </p>
      <p>
        {{ truncateText(product.description, 140) }}
      </p>
      <RouterLink :to="{ name: 'SingleProduct', params: { id: product.id } }">
        <button
          class="bg-transparent border-none pt-[15px] text-purple-text cursor-pointer hover:text-button-hover cursor-pointer font-semibold"
        >
          View details
          <i class="bi bi-arrow-up-right"></i>
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
