<template>
  <div id="app">
    <Header :links="links" :phoneNumber="phoneNumber" />
    <Promo/>
    <h1>Bulldozer group</h1>
    <h1>Bulldozer group</h1>
    <h1>Bulldozer group</h1>
    <h1>Bulldozer group</h1>
    <h1>Bulldozer group</h1>
    <h1>Bulldozer group</h1>
    <h1>Bulldozer group</h1>
    <h1>Bulldozer group</h1>
    <h1>Bulldozer group</h1>
    <h1>Bulldozer group</h1>
    <h1>Bulldozer group</h1>
    <h1>Bulldozer group</h1>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Promo from "@/components/Promo.vue";
export default {
  name: "App",
  components: { Header: Header, Promo: Promo },
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
