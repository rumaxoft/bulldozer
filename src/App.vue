<template>
  <div id="app">
    <Header :links="links" :phoneNumber="phoneNumber" />
    <Promo/>
    <About/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Promo from "@/components/Promo.vue";
import About from "@/components/About.vue";
export default {
  name: "App",
  components: { Header: Header, Promo: Promo, About: About },
  data: () => {
    return {
      phoneNumber: {
        human: "+7 (900) 246-80-68",
        code: "+79002468068"
      },
      links: [
        {
          name: "О нас"
        },
        {
          name: "Услуги"
        },
        {
          name: "Порядок работы"
        },
        {
          name: "Портфолио"
        },
        {
          name: "Контакты"
        }
      ]
    };
  }
};
</script>

<style lang="stylus">

#app
  background-color $grey
</style>
