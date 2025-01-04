<template>
  <div v-if="isLoading" class="loader"></div>
  <div v-else-if="topAnimes.length === 0">No data Available</div>
  <div class="text-white text-left" v-else>
    <div class="relative h-[300px] overflow-clip">
      <img :src="singleAnime.picture_url" alt="incredibles" class="w-full absolute z-1 object-cover object-top" loading="eager"/>
      <p class="absolute right-[40px] text-primary_dark font-semibold text-[3.3rem] max-w-[400px] top-[50%] -translate-y-[50%]">{{ singleAnime.title_en }}</p>
      <button class="bg-orange-500 p-2 rounded-lg z-[2] absolute bottom-[10px] left-[30px] flex items-center px-4">
        <v-icon name="hi-solid-play" color="white" scale="2"></v-icon>
        <span class="pl-2 font-semibold">Watch Out</span>
      </button>
    </div>
    <div class="px-3">
      <h2 class="text-xl py-4">Top Animes</h2>
      <div class="grid grid-cols-fill-300 gap-[20px]">
        <MovieIntroCardVue v-for="topAnime in topAnimes" :key="topAnime" :image-url="topAnime.picture_url" :rated="topAnime.score" :name="topAnime.title" :type="topAnime.type" :rank="topAnime.rank" :aired="topAnime.aired_on" :members="topAnime.members" :id="topAnime.myanimelist_id"/>
      </div>
    </div>
  </div>
</template>

<script>
import MovieIntroCardVue from '../MovieIntroCard.vue'
export default {
  components:{
    MovieIntroCardVue
  },
  data(){
    return{
      topAnimes: [],
      isLoading: false,
      singleAnime: [],
    }
  },
  mounted(){
    this.getAllMovies(),
    this.getSingleMovie()
  },
  methods:{
    async getAllMovies(){
      const category = 'all';
      this.isLoading = true;
      try{
        await fetch(`https://myanimelist.p.rapidapi.com/anime/top/${category}?p=1`,{
          headers: {
            'x-rapidapi-key': '4af3707834msh156f178f0bae9d2p189b0djsn5e23bc523e5d',
            'x-rapidapi-host': 'myanimelist.p.rapidapi.com'
          }
        }).then((data)=>data.json())
        .then((res)=>{
          if(res.length > 0){
            this.topAnimes = res
          }
        })
      }catch(e){
        console.log(e.message)
      }finally{
        this.isLoading = false
      }
    },
    async getSingleMovie(){
      try{
        await fetch(`https://myanimelist.p.rapidapi.com/anime/52991`,{
          headers: {
            'x-rapidapi-key': '4af3707834msh156f178f0bae9d2p189b0djsn5e23bc523e5d',
            'x-rapidapi-host': 'myanimelist.p.rapidapi.com'
          }
        }).then((data)=>data.json())
        .then((res)=>(this.singleAnime = res))
      }catch(e){
        console.log(e)
      }
    },
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