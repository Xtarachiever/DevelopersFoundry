import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import * as modules from './store'
import { createStore } from 'vuex'

const app = createApp(App)

const store = createStore({
  modules,
})

app.use(router)
app.use(store)
app.mixin({
  methods: {
    truncateText(str, truncateLength) {
      if (str.length > truncateLength) {
        return str.slice(0, truncateLength) + '...'
      } else {
        return str
      }
    },
  },
})
app.use(VueAxios, axios)
app.mount('#app')
