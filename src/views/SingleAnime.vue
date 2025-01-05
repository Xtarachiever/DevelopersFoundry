<template>
    <div v-if="!getAnime" class="text-white">No Data Available</div>
    <MainView v-else>
        <div class="h-[100vh] w-full relative pb-6 px-6">
            <img :src="getAnime.image" :alt="getAnime.title" class="w-full absolute top-0 right-0 h-full object-cover opacity-50"/>
            <div class="relative text-white text-left flex flex-col justify-end h-full">
                <p class="text-[3rem] font-bold">{{ getAnime.title }}</p>
                <div class="text-[1.2rem] flex items-center gap-[20px]">
                    <div>
                        <v-icon name="fa-star" class="text-orange" scale="1.4"></v-icon>
                        <span class="pl-1">{{ getAnime.ranking }}</span>
                    </div>
                    <div class="flex items-center gap-[10px]">
                        <p>Ep: {{ getAnime.episodes }}</p>•
                        <p v-for="genre in getAnime.genres" :key="genre">{{ genre }},</p>•
                        <p>{{ getAnime.type }}</p>
                    </div>
                </div>
                <p class="font-semibold pt-2">Status: {{ getAnime.status }}</p>
                <div class="py-2 pt-4">
                    <span class="text-orange text-[1.4rem] font-bold py-2">Synopsis:</span>
                    <p class="text-[1.2rem]">{{ truncateText(getAnime.synopsis,300) }}</p>
                </div>
                <div class="flex gap-[20px]">
                    <RouterLink to="/">
                        <button class="rounded-lg px-4 py-2 text-lg flex items-center text-white font-bold border-2 border-white">
                            <v-icon name="bi-arrow-left-short" scale="2"></v-icon>
                            Back
                        </button>
                    </RouterLink>
                    <button @click="navigateToPreview" class="bg-orange px-6 rounded-lg text-white text-lg py-3 font-bold">
                        Preview
                    </button>
                </div>
            </div>
        </div>
    </MainView>
</template>

<script>
import MainView from '@/components/layout/MainView.vue'
export default {
    components:{
        MainView
    },
    props:['id'],
    mounted(){
        this.fetchSingleAnime()
    },
    methods:{
        async fetchSingleAnime(){
            this.$store.commit("setAnimeId", this.id);
            await this.$store.dispatch("setSingleAnime", this.id); 
        },
        navigateToPreview(){
            window.location.href = this.getAnime.link
        }
    },
    computed:{
        getAnime(){
            return this.$store.getters.getSingleAnime
        }
    }
}
</script>

<style>

</style>