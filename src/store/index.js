import { createStore } from "vuex";

const url = 'https://anime-db.p.rapidapi.com/anime'
const headers= {
    'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY,
    'x-rapidapi-host': import.meta.env.VITE_APP_RAPID_API_HOST,
    'Accept': 'application/json'
}

export default createStore({
    state:{
        singleAnime: localStorage.getItem("singleAnime") 
        ? JSON.parse(localStorage.getItem("singleAnime")) 
        : [],
      allAnimes: localStorage.getItem("allAnimes") 
        ? JSON.parse(localStorage.getItem("allAnimes")) 
        : [],
        id:'1',
        loading:false
    },
    mutations:{
        setAnimesArray(state, payload){
            state.allAnimes = payload
            localStorage.setItem("allAnimes", JSON.stringify(payload));
        },
        setSingleAnime(state, payload){
            state.singleAnime = payload
            localStorage.setItem("singleAnime", JSON.stringify(payload));
        },
        setAnimeId(state, id){
            state.id = id
        },
        setLoading(state, isLoading){
            state.loading = isLoading
        }
    },
    actions:{
        // Asynchronous actions
        async setAnimesArray(state,{page, search,genres}){
            state.commit("setLoading", true)
            try{
                let pageNo = page || '1'
                await fetch(`${url}?page=${pageNo}&size=20${search ? `&search=${search}` : ''}${genres ? `&genres=${genres}` : ''}&sortOrder=asc
                `,{
                    headers
                })
                .then((data)=>data.json())
                .then((res)=>state.commit("setAnimesArray",res.data))
            }catch(err){
                console.log(err)
            }finally{
                state.commit("setLoading", false)
            }
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
        getSingleAnime: state => state.singleAnime,
        isLoading: (state) => state.loading,
    }
})