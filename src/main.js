import "@/styles/common.styl";
import Vue from "vue";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";

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
