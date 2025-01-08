// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { PrUser, MdAlternateemailSharp, BiEye, RiBuilding2Line,HiLocationMarker, BiTelephone, MdArrowrightaltRound } from "oh-vue-icons/icons";

const app = createApp(App)

addIcons(PrUser, MdAlternateemailSharp, BiEye, RiBuilding2Line,HiLocationMarker, BiTelephone, MdArrowrightaltRound)

app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
