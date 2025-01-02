<script>
export default {
    name:"NavBar",
    components:{
    }
}
</script>

<template>
   <div class="flex justify-between py-6 px-8 text-stained_white">
        <p class="text-white font-semibold">MovieDB</p>
        <div class="flex gap-[30px]">
            <p>Movies</p>
            <p>Shows</p>
        </div>
        <div class="w-[30px] h-[30px] ">
            <v-icon name="io-search"></v-icon>
        </div>
   </div>
</template>


<style>

</style>