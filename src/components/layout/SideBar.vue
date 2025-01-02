<template>
  <div class="px-4 py-4 overflow-scroll relative">
    <p class="text-white text-left">New trailers</p>
    <div class="grid gap-[30px]">
      <TrailerMovieCard name="Bad Guys" imageUrl="/incredibles.jpeg" duration="2hrs" time="2:32" views="31M"/>
      <TrailerMovieCard name="Hidden Love" imageUrl="/nightmare.webp" duration="2hrs" time="2:32" views="23M"/>
    </div>
    <div class="text-left text-white">
      <p>Favorite genres</p>
      <div>
         <div class="flex gap-[10px] py-3">
           <Pills name="Action"/>
           <Pills name="Thriller"/>
           <Pills name="SciFi"/>
           <Pills name="Romance"/>
         </div>
         <p class="py-3">Add your favourite genres</p>
         <div class="flex gap-[10px]">
          <Pills name="Crime" :unselected="true"/>
          <Pills name="Comedy" :unselected="true"/>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrailerMovieCard from '../TrailerMovieCard.vue';
import Pills from '../Pills.vue';
export default {
  components:{
    TrailerMovieCard,
    Pills
  }
}
</script>

<style>

</style>