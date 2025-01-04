k<template>
  <div class="bg-primary_dark">
    <div class="sticky top-0 z-10 bg-primary_dark">
      <NavBarVue />
    </div>
    <div class="relative min-h-[100vh]">
      <div class="border-r border-gray z-[2] w-[350px] fixed top-0 h-full flex pt-[80px]" :class="collapse ? '-left-[320px]' : 'left-0'">
        <SideBarVue />
        <div class="absolute top-[120px] -right-[25px] z-[10] bg-white py-1 w-[50px] rounded-lg cursor-pointer" v-on:click="collapseSideBar()">
          <v-icon name="md-arrowleft-round" class="text-black" scale="2.4"></v-icon>
          <!-- <v-icon name="io-search" class="text-black" scale="2"></v-icon> -->
        </div>
      </div>
      <div :class="collapse ? 'ml-[50px]' : 'ml-[350px]'">
        <MainViewVue />
      </div>
    </div>
  </div>
</template>

<script>
import MainViewVue from '@/components/layout/MainView.vue'
import NavBarVue from '../components/layout/NavBar.vue'
import SideBarVue from '../components/layout/SideBar.vue'
export default {
  data(){
    return{
      collapse: false
    }
  },
  components:{
    NavBarVue,
    SideBarVue,
    MainViewVue
  },
  methods:{
    collapseSideBar(){
      this.collapse = !this.collapse
    }
  }
}
</script>

<style>

</style>