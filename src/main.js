import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoSearch, HiEye, HiSolidPlay, MdArrowleftTwotone, MdArrowleftRound, GiFlamedLeaf,CoExternalLink } from "oh-vue-icons/icons";

const app = createApp(App)
addIcons(IoSearch,HiEye, HiSolidPlay,MdArrowleftTwotone, MdArrowleftRound, GiFlamedLeaf, CoExternalLink)

app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')