import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'

const app = createApp(App)

app.use(router)
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
