
const url = 'https://fakestoreapi.com/products';

const productsStore={
    namespaced: true,
    state:{
        products:[],
        cartItems:[],
        product:[],
        isLoading:false
    },
    mutations:{
        setState(state, {key, payload}){
            state[key] = payload
        },
        addToCart(state, product){
            const existingItem = state.cartItems.find((item) => item.id === product.id);
            if(existingItem){
                existingItem.quantity += 1
            }else{
                state.cartItems.push({...product, quantity:1})
            }
        },
        removeFromCart(state, productId){
            state.cartItems = state.cartItems.filter((cartItem)=>cartItem.id !== productId)
        },
        setLoading(state, loading){
            state.isLoading = loading
        }
    },
    actions:{
        async getAllProducts({commit}){
            try{
                commit('setLoading', true)
                const response = await fetch(url)
                const data = await response.json()
                commit('setState',{ key: 'products', payload: data })
            }catch(err){
                console.log(err)
            }finally{
                commit('setLoading', false)
            }
        },
        async fetchSingleProduct({commit}, id){
            try{
                commit('setLoading', true)
                const response = await fetch(`${url}/${id}`)
                const data = await response.json()
                commit('setState',{ key: 'product', payload: data })
            }catch(err){
                console.log(err)
            }finally{
                commit('setLoading', false)
            }
        },
        async addToCart({commit}, product){
            try{
                commit('addToCart', product)
            }catch(err){
                console.log(err)
            }
        },
        async removeFromCart({commit}, productId){
            try{
                commit('removeFromCart', productId)
            }catch(err){
                console.log(err)
            }
        }
    },
    modules:{

    },
    getters:{
        getAllProducts: (state) => state.products,
        getSingleProduct: (state) => state.product,
        getCartItems: (state) => state.cartItems,
        isLoading: (state) =>state.isLoading
    }
}

export default productsStore