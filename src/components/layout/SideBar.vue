<template>
  <div v-if="!animes" class="text-white">
    <img src="/Not_Found.png" alt="Not Found"/>
    <p>No Data Found</p>
  </div>
  <div class="px-4 py-4 overflow-scroll relative" v-else>
    <p class="text-white text-left">New trailers</p>
    <div class="grid gap-[30px]">
      <TrailerMovieCard v-for="anime in animes" :key="anime" :name="anime.title" :imageUrl="anime.image" :views="anime.type" :eps="anime.episodes" />
    </div>
    <div class="text-left text-white pt-6">
      <p>Favorite genres</p>
      <div>
         <div class="flex gap-[10px] py-3">
           <Pills name="Action"/>
           <Pills name="Thriller"/>
           <Pills name="Sci-Fi"/>
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
  },
  mounted(){
    this.$store.dispatch("setAnimesArray")
  },
  computed:{
    animes(){
      return this.$store.getters?.getAllAnimes?.filter((anime)=> anime.status === 'Finished Airing').slice(0,4)
    }
  },
}
</script>

<style>

</style>