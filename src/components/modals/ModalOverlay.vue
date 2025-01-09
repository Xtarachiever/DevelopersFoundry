<template>
  <div class="left-0 modal_div fixed top-0 h-[100vh] w-[100vw] overflow-hidden z-[10]" v-if="open[name]">
     <div class="bg-white shadow-xl px-4 py-4 w-full absolute -translate-x-[50%] min-h-[300px] -translate-y-[50%] top-[50%] left-[50%] max-w-[600px] m-auto">
        <slot />
        <v-icon name="md-cancel-sharp" class="absolute top-[10px] right-[15px] text-faint_cyan_blue cursor-pointer" @click="open[name] = false"></v-icon>
     </div>
  </div>
</template>

<script>
export default {
    props:["name","open"]
}
</script>

<style>
.modal_div{
    background-color: rgba(246, 248, 248, 0.4);
}
</style>