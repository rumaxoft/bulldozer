<template>
  <div id="app">
    <Header :links="links" :contacts="contacts" />
    <Promo />
    <About />
    <Services :serviceCards="serviceCards" />
    <Timeline />
    <Gallery :gallery="gallery" />
    <Contacts :contacts="contacts" />
    <FooterSection :contacts="contacts" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Promo from "@/components/Promo.vue";
import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
import Timeline from "@/components/Timeline.vue";
import Gallery from "@/components/Gallery.vue";
import Contacts from "@/components/Contacts.vue";
import FooterSection from "@/components/FooterSection.vue";
export default {
  name: "App",
  components: {
    Header: Header,
    Promo: Promo,
    About: About,
    Services: Services,
    Timeline: Timeline,
    Gallery: Gallery,
    Contacts: Contacts,
    FooterSection: FooterSection
  },
  data: () => {
    return {
      contacts: {
        phoneNumber: {
          human: "+7 (900) 246-80-68",
          code: "+79002468068"
        },
        address: "г. Краснодар, ул. Улица, дом 10.",
        email: "mail@mail.ru",
        whatsapp: "",
        telegram: "",
        instagram: "",
        vkontakte: ""
      },
      links: [
        {
          name: "О нас",
          href: "#about"
        },
        {
          name: "Услуги",
          href: "#services"
        },
        {
          name: "Порядок работы",
          href: "#timeline"
        },
        {
          name: "Портфолио",
          href: "#gallery"
        },
        {
          name: "Контакты",
          href: "#contacts"
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
      ],
      gallery: [
        {
          id: "1",
          title: "Квартира 83 м2. Краснодар",
          text:
            "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание ",
          thumbnailUrl: require("@/assets/gallery/1/thumbnail.jpg"),
          slides: [
            {
              imageUrl: require("@/assets/gallery/1/1.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/1/2.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/1/3.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/1/4.jpg")
            }
          ]
        },
        {
          id: "2",
          title: "Апартаменты. Лофт. Сочи.",
          text:
            "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание ",
          thumbnailUrl: require("@/assets/gallery/2/thumbnail.jpg"),
          slides: [
            {
              imageUrl: require("@/assets/gallery/2/1.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/2.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/3.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/4.jpg")
            }
          ]
        },
        {
          id: "3",
          title: "Кухня по индивидуальному проекту",
          text:
            "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание ",
          thumbnailUrl: require("@/assets/gallery/3/thumbnail.jpg"),
          slides: [
            {
              imageUrl: require("@/assets/gallery/3/1.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/3/2.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/3/3.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/3/4.jpg")
            }
          ]
        },
        {
          id: "4",
          title: "Кафе. Туапсе.",
          text:
            "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание ",
          thumbnailUrl: require("@/assets/gallery/4/thumbnail.jpg"),
          slides: [
            {
              imageUrl: require("@/assets/gallery/4/1.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/4/2.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/4/3.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/4/4.jpg")
            }
          ]
        },
        {
          id: "5",
          title: "Загородный дом. Сочи.",
          text:
            "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание ",
          thumbnailUrl: require("@/assets/gallery/5/thumbnail.jpg"),
          slides: [
            {
              imageUrl: require("@/assets/gallery/5/1.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/5/2.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/5/3.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/5/4.jpg")
            }
          ]
        },
        {
          id: "6",
          title: "Детская. Краснодар.",
          text:
            "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание ",
          thumbnailUrl: require("@/assets/gallery/6/thumbnail.jpg"),
          slides: [
            {
              imageUrl: require("@/assets/gallery/6/1.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/6/2.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/6/3.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/6/4.jpg")
            }
          ]
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
