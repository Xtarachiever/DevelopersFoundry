import axios from 'axios'

const url = 'https://fakestoreapi.com/products'

const productStore = {
  state: {
    products: [],
    product: {},
    isLoading: false,
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
    setProduct(state, payload) {
      state.product = payload
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading
    },
  },
  actions: {
    async getAllProducts(state) {
      state.commit('setLoading', true)
      try {
        const res = await axios.get(url)
        state.commit('setProducts', res.data)
      } catch (e) {
        console.log(e)
      } finally {
        state.commit('setLoading', false)
      }
    },
    async getProduct(state, id) {
      state.commit('setLoading', true)
      try {
        const res = await axios.get(`${url}/${id}`)
        state.commit('setProduct', res.data)
      } catch (e) {
        console.log(e)
      } finally {
        state.commit('setLoading', false)
      }
    },
  },
  modules: {},
  getters: {
    getAllProducts: (state) => state.products,
    getLoadingState: (state) => state.isLoading,
    getProduct: (state) => state.product,
  },
}

export default productStore
