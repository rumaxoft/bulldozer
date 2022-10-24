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
        address: "350038, г.Краснодар, ул.Промышленная, д.49/2",
        email: "info@bldzr.ru",
        whatsapp: "https://wa.me/+79002468068",
        telegram: "tg://resolve?domain=helixkrd",
        instagram:
          "https://www.instagram.com/p/CFRhNqoBW2J/?igshid=occ1qs3gjt6p",
        vkontakte: "https://vk.com/remonttut23"
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
          text: "",
          imageUrl: require("@/assets/services/7.jpg")
        },
        {
          title: "Ремонт и отделка домов, коттеджей, таунхаусов",
          text: "",
          imageUrl: require("@/assets/services/1.jpg")
        },
        {
          title: "Перепланировка квартиры в новостроке",
          text: "",
          imageUrl: require("@/assets/services/4.jpg")
        },
        {
          title: "Ремонт в новостройке",
          text: "",
          imageUrl: require("@/assets/services/3.jpg")
        },
        {
          title: "Капитальный ремонт вторичного жилья",
          text: "",
          imageUrl: require("@/assets/services/2.jpg")
        },
        {
          title: "Ремонт ванной комнаты и с/у под ключ",
          text: "",
          imageUrl: require("@/assets/services/9.jpg")
        },
        {
          title: "Ремонт офисов и торговых помещений",
          text: "",
          imageUrl: require("@/assets/services/5.jpg")
        },
        {
          title: "Косметический ремонт",
          text: "",
          imageUrl: require("@/assets/services/8.jpg")
        },
        {
          title: "Отделка фасадов домов",
          text: "",
          imageUrl: require("@/assets/services/6.jpg")
        }
      ],
      gallery: [
        {
          id: "1",
          title: "Ремонт кухни под ключ",
          text:
            "Здесь представлены фотографии выполненных нами работ по ремонту кухни.",
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
            },
            {
              imageUrl: require("@/assets/gallery/1/5.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/1/6.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/1/7.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/1/8.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/1/9.jpg")
            }
          ]
        },
        {
          id: "2",
          title: "Ремонт квартиры",
          text:
            "Выравнивание стен. Оклеивание обоями, окрашивание. Монтаж напольных покрытий и потолков, проводки. Монтаж декоративного камня, декоративных панелей. Установка люстр, светильников и многое другое.",
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
            },
            {
              imageUrl: require("@/assets/gallery/2/5.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/6.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/7.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/8.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/9.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/10.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/11.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/12.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/13.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/14.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/15.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/16.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/17.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/18.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/19.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/20.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/21.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/22.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/23.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/2/24.jpg")
            }
          ]
        },
        {
          id: "3",
          title: "Ремонт санузла",
          text:
            "Выполняем работы любой сложности! Отделка стен кафельной плиткой, установка стандартного и нестандартного сантехоборудования, предварительный дизайн-проект.",
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
            },
            {
              imageUrl: require("@/assets/gallery/3/5.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/3/6.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/3/7.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/3/8.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/3/9.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/3/10.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/3/11.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/3/12.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/3/13.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/3/14.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/3/15.jpg")
            },
            {
              imageUrl: require("@/assets/gallery/3/16.jpg")
            }
          ]
        },
        {
          id: "4",
          title: "Фото процесса ремонта.",
          text:
            "Мы всегда содержим в чистоте объект строительства, самостоятельно вывозим строительный мусор. Сдаем все работы в оговоренные сроки.",
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
            },
            {
              imageUrl: require("@/assets/gallery/4/5.jpg")
            }
          ]
        },
        {
          id: "5",
          title:
            "Проектирование и монтаж подвода и отвода воды, отопительных систем. ",
          text:
            "Производим работы любой сложности как в квартирах, так и частных домовладениях. Подвод и отвод воды, отопительные системы, скважины и септики.",
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
            },
            {
              imageUrl: require("@/assets/gallery/5/5.jpg")
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
