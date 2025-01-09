<template>
  <button class=" px-2 py-2 rounded-[5px] w-full" :class="variant ? variant : `bg-green border-none text-white max-w-[150px] ${moreStyling}`">{{ name }} <v-icon v-if="iconName" :name="iconName"></v-icon></button>
</template>

<script>
export default {
  props:["name","iconName","variant","moreStyling"]
}
</script>

<style>

</style>