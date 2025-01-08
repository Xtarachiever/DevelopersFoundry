<template>
  <button class="bg-green text-white px-2 py-2 rounded-[5px] border-none max-w-[150px] w-full">{{ name }} <v-icon v-if="iconName" :name="iconName"></v-icon></button>
</template>

<script>
export default {
  props:["name","iconName"]
}
</script>

<style>

</style>