<template>
  <div id="app">
    <Header :links="links" :phoneNumber="phoneNumber" />
    <Promo />
    <About />
    <Services :serviceCards="serviceCards" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Promo from "@/components/Promo.vue";
import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
export default {
  name: "App",
  components: {
    Header: Header,
    Promo: Promo,
    About: About,
    Services: Services
  },
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
      ],
      serviceCards: [
        {
          title: "Ремонт квартир под ключ",
          text: "Товарищи! постоянное информационно-пропагандистское",
          imageUrl: require("@/assets/services/7.jpg")
        },
        {
          title: "Ремонт и отделка домов, коттеджей, таунхаусов",
          text:
            "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени",
          imageUrl: require("@/assets/services/1.jpg")
        },
        {
          title: "Перепланировка квартиры в новостроке",
          text:
            "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание ",
          imageUrl: require("@/assets/services/4.jpg")
        },
        {
          title: "Ремонт в новостройке",
          text:
            "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени",
          imageUrl: require("@/assets/services/3.jpg")
        },
        {
          title: "Капитальный ремонт вторичного жилья",
          text:
            "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени",
          imageUrl: require("@/assets/services/2.jpg")
        },
        {
          title: "Ремонт ванной комнаты и с/у под ключ",
          text:
            "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной",
          imageUrl: require("@/assets/services/9.jpg")
        },
        {
          title: "Ремонт офисов и торговых помещений",
          text:
            "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание ",
          imageUrl: require("@/assets/services/5.jpg")
        },
        {
          title: "Косметический ремонт",
          text:
            "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание ",
          imageUrl: require("@/assets/services/8.jpg")
        },
        {
          title: "Отделка фасадов домов",
          text: "Товарищи! постоянное информационно-пропагандистское",
          imageUrl: require("@/assets/services/6.jpg")
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
