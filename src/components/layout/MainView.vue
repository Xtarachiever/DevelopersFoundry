k<template>
  <div class="bg-primary_dark">
    <div class="sticky top-0 z-10 bg-primary_dark">
      <NavBar />
    </div>
    <div class="relative min-h-[100vh]">
      <div class="border-r border-gray z-[2] w-[350px] fixed top-0 h-full flex pt-[80px]" :class="collapse ? '-left-[320px]' : 'left-0'">
        <SideBar />
        <div class="absolute top-[120px] -right-[25px] z-[10] bg-white py-1 w-[50px] rounded-lg cursor-pointer" v-on:click="collapseSideBar()">
          <v-icon name="md-arrowleft-round" class="text-black" scale="2.4"></v-icon>
          <!-- <v-icon name="io-search" class="text-black" scale="2"></v-icon> -->
        </div>
      </div>
      <div :class="collapse ? 'ml-[50px]' : 'ml-[350px]'">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import SideBar from './SideBar.vue';
export default {
  data(){
    return{
      collapse: false
    }
  },
  components:{
    NavBar,
    SideBar
  },
  methods:{
    collapseSideBar(){
      this.collapse = !this.collapse
    }
  }
}
</script>

<style>
  .loader {
    --R: 30px;
    --g1: #09080A 96%, #0000;
    --g2: #eeeeee 96%, #0000;
    width: calc(2*var(--R));
    aspect-ratio: 1;
    border-radius: 50%;
    display: grid;
    -webkit-mask: linear-gradient(#000 0 0);
    animation: l30 2s infinite linear;
    margin: auto;
    margin-top: 100px;
  }
  .loader::before,
  .loader::after{
    content:"";
    grid-area: 1/1;
    width: 50%;
    background:
      radial-gradient(farthest-side,var(--g1)) calc(var(--R) + 0.866*var(--R) - var(--R)) calc(var(--R) - 0.5*var(--R)   - var(--R)),
      radial-gradient(farthest-side,var(--g1)) calc(var(--R) + 0.866*var(--R) - var(--R)) calc(var(--R) - 0.5*var(--R)   - var(--R)),
      radial-gradient(farthest-side,var(--g2)) calc(var(--R) + 0.5*var(--R)   - var(--R)) calc(var(--R) - 0.866*var(--R) - var(--R)),
      radial-gradient(farthest-side,var(--g1)) 0 calc(-1*var(--R)),
      radial-gradient(farthest-side,var(--g2)) calc(var(--R) - 0.5*var(--R)   - var(--R)) calc(var(--R) - 0.866*var(--R) - var(--R)),
      radial-gradient(farthest-side,var(--g1)) calc(var(--R) - 0.866*var(--R) - var(--R)) calc(var(--R) - 0.5*var(--R)   - var(--R)),
      radial-gradient(farthest-side,var(--g2)) calc(-1*var(--R))  0,
      radial-gradient(farthest-side,var(--g1)) calc(var(--R) - 0.866*var(--R) - var(--R)) calc(var(--R) + 0.5*var(--R)   - var(--R));
     background-size: calc(2*var(--R)) calc(2*var(--R));
     background-repeat :no-repeat;
  }
  .loader::after {
   transform: rotate(180deg);
   transform-origin: right;
  }
  
  @keyframes l30 {
    100% {transform: rotate(-1turn)}
  }
</style>