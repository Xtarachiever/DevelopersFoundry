<template>
    <div
    :style="{ backgroundImage: `url(${imageUrl})` }"
    class="relative bg-cover bg-start max-w-[380px] h-[250px] bg-no-repeat rounded-[20px] overflow-clip">
        <div class="absolute left-[20px] top-[10px] text-orange font-bold">
            <v-icon name="gi-flamed-leaf" color="orange"></v-icon>
            <span class="ml-1 font-bold">{{ rank }}</span>
        </div>
        <div class="movies_details_div absolute bottom-[0] px-6 text-left bg-opacity-65 py-2 w-full pb-[50px]" :class="more ? 'h-full' : 'h-auto'">
            <div class="">
                <div class="flex items-center gap-[20px]">
                    <v-icon name="hi-solid-play" class="text-primary_dark" scale="2"></v-icon>
                    <div class="font-bold">
                        <p>{{ more ? name : truncatedName }}</p>
                        <div class="flex gap-[10px] mt-2">
                            <PillsVue v-for="genre in slicedGenre" :name="genre" :key="genre"/>
                        </div>
                        <!-- <span>{{ type }}</span> -->
                    </div>
                </div>
                <div :class="more ? 'block pt-4 m-auto' : 'hidden'">
                    <p>Rank: {{ rank }}</p>
                    <p>Members: {{ members }}</p>
                    <p>Aired on: {{ aired }}</p>
                    <RouterLink :to="{ name: 'SingleAnime', params: { id: id } }">
                        <span class=" text-primary_dark cursor-pointer font-bold m-auto mt-2 text-center hover:text-white">Preview <v-icon name="co-external-link"></v-icon></span>
                    </RouterLink>
                </div>
                <div class="bg-white rounded-[20px] hover:text-orange cursor-pointer w-fit px-2 py-1 font-bold absolute bottom-[10px] right-[30px]" v-on:click="handleMoreDetails">
                    <p v-if="more" class="">Show Less</p>
                    <p v-else>Show More</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PillsVue from './Pills.vue'
export default {
    data(){
        return{
            more: false,
            slicedGenre:[]
        }
    },
    mounted(){
        this.sliceGenres()
    },
    components:{
        PillsVue
    },
    methods:{
        async handleMoreDetails(){
            this.more = !this.more
        },
        async sliceGenres(){
            this.slicedGenre = this.genres.slice(0,2)
        },
    },
    computed:{
        truncatedName(){
            if(this?.name?.length > 15){
                return this?.name?.slice(0, 15) + "..."
            }
            return this?.name
        }
    },
    props:["imageUrl","rank","name","type","rated","aired","members","id","genres"],
}
</script>

<style>
.movies_details_div{
    background: #ffffff88;
    backdrop-filter: blur(16px);
    color: #09080A;
}
</style>