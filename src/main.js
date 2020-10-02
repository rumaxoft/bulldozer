import "@/styles/common.styl";
import Vue from "vue";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";
import VueScrollactive from "vue-scrollactive";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.use(VueScrollactive);

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "/error.svg",
  loading: "/loading.svg",
  attempt: 1
});

new Vue({
  render: h => h(App)
}).$mount("#app");
