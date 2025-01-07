<template>
  <MainView>
    <div v-if="isLoading" class="loader"></div>
    <div class="text-white text-left" v-else-if="animes && animes.length > 0 && !isLoading">
      <div class="relative h-[400px] pb-[40px] sm:h-[300px] overflow-clip">
        <img :src="singleAnime.image" alt="incredibles" class="w-full opacity-65 absolute z-1 object-cover object-top" />
        <div
          class="absolute right-[40px] flex flex-col max-w-[500px] items-end text-primary_dark font-semibold top-[50%] -translate-y-[50%]">
          <p class="bg-white text-[1.4rem] sm:text-[2.5rem] rounded-lg px-4">{{ singleAnime.title }}</p>
          <div class="flex right-[0px] py-4 gap-[10px] flex-wrap">
            <Pills v-for="genre in singleAnime.genres" :key="genre" :name="genre" />
          </div>
          <p class="text-white text-right">{{ truncateText(singleAnime.synopsis, 102) }}</p>
        </div>
        <button class="bg-orange p-2 rounded-lg z-[1] absolute bottom-[5px] sm:bottom-[10px] left-[30px] flex items-center px-4">
          <v-icon name="hi-solid-play" color="white" scale="2"></v-icon>
          <span class="pl-2 font-semibold">Watch Out</span>
        </button>
      </div>
      <div class="px-3 py-6">
        <h2 class="text-xl py-4">Top Animes</h2>
        <div class="grid sm:grid-cols-fill-300 gap-[20px]">
          <MovieIntroCard v-for="topAnime in animes" :key="topAnime._id" :image-url="topAnime.image"
            :name="topAnime.title" :type="topAnime.type" :rank="topAnime.ranking" :aired="topAnime.status"
            :members="topAnime.members" :id="topAnime._id" :genres="topAnime.genres" />
        </div>
      </div>
      <div class="text-right pr-2">
        <v-icon name="bi-arrow-left-circle" scale="2.4" class="mr-4" @click="decreasePageNo"></v-icon>
        <v-icon name="bi-arrow-right-circle" scale="2.4" @click="increasePageNo"></v-icon>
      </div>
    </div>
    <div v-else class="overflow-clip m-auto max-w-[500px]">
      <img src="/No_Data.png" alt="No data found" class="h-full object-contain"/>
    </div>
  </MainView>
</template>

<script>
import Pills from '@/components/Pills.vue'
import MovieIntroCard from '@/components/MovieIntroCard.vue'
import MainView from '@/components/layout/MainView.vue'
export default {
  components: {
    MovieIntroCard,
    Pills,
    MainView
  },
  data() {
    return {
      pageNo: 1
    }
  },
  mounted() {
    this.fetchHighRatedAnime()
    this.fetchAllAnime()
  },
  computed: {
    animes() {
      return this.$store.getters.getAllAnimes
    },
    singleAnime() {
      return this.$store.getters.getSingleAnime
    },
    isLoading(){
      return this.$store.getters.isLoading
    }
  },
  methods: {
    async increasePageNo(){
      this.pageNo++
      await this.fetchAllAnime();
    },
   async decreasePageNo(){
      this.pageNo--
      await this.fetchAllAnime();
    },
    // async fetchAnimesOnSearch(){
    //   const input = 
    // },
    async fetchHighRatedAnime() {
      // this.$store.commit("setAnimeId", '1');
      await this.$store.dispatch("setSingleAnime", '1');
    },
    async fetchAllAnime(){
      const payload = {
        page: this.pageNo
      };
      await this.$store.dispatch("setAnimesArray", payload)
    }
  }
}
</script>

<style></style>