<template>
  <div class="px-6">
    <div v-if="activeContent === content.title.toLowerCase()" class="py-6" >
        <component :is="content.content" />
    </div>
  </div>
</template>

<script>
export default {
    props:["content","activeContent"],
}
</script>

<style>

</style>