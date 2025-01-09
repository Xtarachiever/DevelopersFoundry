<template>
   <div class="bg-gray1">
     <NavBar />
     <div class="fixed h-full bg-white shadow-lg">
      <SideBar />
     </div>
     <div class="ml-[100px] pt-6 px-6 min-h-[100vh]">
       <slot />
     </div>
   </div>
</template>

<script>
import NavBar from './NavBar.vue';
import SideBar from './SideBar.vue';
export default {
    components:{
        NavBar,
        SideBar
    }
}
</script>

<style>
</style>