// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style/index.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as modules from './store'
import {
  PrUser,
  MdAlternateemailSharp,
  BiEye,
  RiBuilding2Line,
  HiLocationMarker,
  BiTelephone,
  MdArrowrightaltRound,
  BiArrowLeft,
  FaUserCircle,
  MdKeyboardarrowdownRound,
  MdDashboardRound,
  PrUsers,
  BiWalletFill,
  BiArrowLeftCircleFill,
  FaChevronCircleRight,
  FaChevronCircleLeft,
  MdCancelSharp,
  MdCheckboxoutlineblank,
  MdCheckboxRound,
  RiDeleteBinLine,
  MdPowersettingsnewTwotone,
  MdKeyboardarrowleftSharp,
  MdKeyboardarrowrightRound,
  CoDelete,
  CoClock,
  IoSettingsSharp,
  MdLogoutOutlined,
  GiShoppingCart,
  MdKeyboarddoublearrowleft,
  MdKeyboarddoublearrowrightOutlined,
  MdKeyboardarrowdownSharp,
  BiGrid1X2Fill,
  BiListTask,
  BiPlus,
  HiMinusSm
} from "oh-vue-icons/icons";
import { createStore } from "vuex";

const app = createApp(App);

addIcons(
  PrUser,
  MdAlternateemailSharp,
  BiEye,
  RiBuilding2Line,
  HiLocationMarker,
  BiTelephone,
  MdArrowrightaltRound,
  BiArrowLeft,
  FaUserCircle,
  MdKeyboardarrowdownRound,
  MdDashboardRound,
  PrUsers,
  BiWalletFill,
  BiArrowLeftCircleFill,
  FaChevronCircleRight,
  FaChevronCircleLeft,
  MdCancelSharp,
  MdCheckboxoutlineblank,
  MdCheckboxRound,
  RiDeleteBinLine,
  MdPowersettingsnewTwotone,
  MdKeyboardarrowleftSharp,
  MdKeyboardarrowrightRound,
  CoDelete,
  CoClock,
  IoSettingsSharp,
  MdLogoutOutlined,
  GiShoppingCart,
  MdKeyboarddoublearrowleft,
  MdKeyboarddoublearrowrightOutlined,
  MdKeyboardarrowdownSharp,
  BiGrid1X2Fill,
  BiListTask,
  BiPlus,
  HiMinusSm
);

const store = createStore({
  modules
})

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

app.use(router);
app.use(store)
app.component("v-icon", OhVueIcon);
app.mount("#app");
