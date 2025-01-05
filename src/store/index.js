import { createStore } from "vuex";

const url = 'https://anime-db.p.rapidapi.com/anime'
const headers= {
    'x-rapidapi-key': process.env.VUE_APP_RAPID_API_KEY,
    'x-rapidapi-host': process.env.VUE_APP_RAPID_API_HOST
}
export default createStore({
    state:{
        singleAnime:[],
        allAnimes:[],
        id:'1',
    },
    mutations:{
        setAnimesArray(state, payload){
            state.allAnimes = payload
        },
        setSingleAnime(state, payload){
            state.singleAnime = payload
        },
        setAnimeId(state, id){
            state.id = id
        }
    },
    actions:{
        // Asynchronous actions
        async setAnimesArray(state,page){
            let pageNo = page || '1'
            await fetch(`${url}?page=${pageNo}&size=20&sortOrder=asc
            `,{
                headers
            })
            .then((data)=>data.json())
            .then((res)=>state.commit("setAnimesArray",res.data))
        },
        async setSingleAnime(state,id){
            let animeId = this.state.id || id
            await fetch(`${url}/by-id/${animeId}
            `,{
                headers
            })
            .then((data)=>data.json())
            .then((res)=>state.commit("setSingleAnime",res))
        }
    },
    modules:{},
    getters:{
        getAllAnimes: state => state.allAnimes,
        getSingleAnime: state => state.singleAnime
    }
})