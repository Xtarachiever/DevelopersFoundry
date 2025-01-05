import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import store from './store';
import { IoSearch, HiEye, HiSolidPlay, MdArrowleftTwotone, MdArrowleftRound, GiFlamedLeaf,CoExternalLink, FaStar, BiArrowLeftShort, BiArrowLeftCircle, BiArrowRightCircle } from "oh-vue-icons/icons";

const app = createApp(App)
addIcons(IoSearch,HiEye, HiSolidPlay,MdArrowleftTwotone, MdArrowleftRound, GiFlamedLeaf, CoExternalLink, FaStar, BiArrowLeftShort, BiArrowLeftCircle,BiArrowRightCircle)

app.use(router)
app.component("v-icon", OhVueIcon);
app.use(store)
app.mixin({
    methods: {
      truncateText(str, truncateLength) {
        if(str && str.length){
          if (str.length > truncateLength) {
            return str.slice(0, truncateLength) + '...'
          } else {
            return str
          }
        }else{
          return ''
        }
      },
    },
})
app.mount('#app')