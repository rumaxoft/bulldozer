<template>
  <section id="contacts" class="contacts">
    <h2 class="contacts__title">Контакты</h2>
    <div class="contacts__content">
      <div class="contacts__text-wrapper">
        <p class="contacts__subtitle">Bulldozer Group</p>
        <ul class="contacts__list">
          <li class="contacts__list-item">
            <p class="contacts__list-item-content">
              <span class="contacts__address-icon contacts__icon"></span>
              <span class="contacts__list-item-text">{{ contacts.address }}</span>
            </p>
          </li>
          <li class="contacts__list-item">
            <a href="" class="contacts__list-item-content">
              <span class="contacts__phone-icon contacts__icon"></span>
              <p class="contacts__list-item-text">
                {{ contacts.phoneNumber.human }}
              </p>
            </a>
          </li>
          <li class="contacts__list-item">
            <a href="" class="contacts__list-item-content">
              <span class="contacts__email-icon contacts__icon"></span>
              <p class="contacts__list-item-text">{{ contacts.email }}</p>
            </a>
          </li>
          <li class="contacts__list-item">
            <a href="" class="contacts__list-item-content">
              <span class="contacts__whatsapp-icon contacts__icon"></span>
              <p class="contacts__list-item-text">напишите нам в whatsapp</p>
            </a>
          </li>
          <li class="contacts__list-item">
            <a href="" class="contacts__list-item-content">
              <span class="contacts__telegram-icon contacts__icon"></span>
              <p class="contacts__list-item-text">напишите нам в telegram</p>
            </a>
          </li>
        </ul>
      </div>
      <div ref="yandexMap" class="contacts__map">
        <div class="contacts__map-fallback-wrapper">
          <img v-lazy="require('@/assets/map.png')" alt="map" class="contacts__map-fallback">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Contacts",
  props: ["contacts"],
  data: () => {
    return {
      yandexMapShown: false
    };
  },
  methods: {
    showMap() {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ada65849de0593c5873d9d5ad1f68f7ff60cfb2b54391c598e5108561568259dd&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true";
      this.$refs.yandexMap.appendChild(script);
    },
    deferYandexMap() {
      let mapContainer = this.$refs.yandexMap;

      window.addEventListener(
        "scroll",
        () => {
          if (!this.yandexMapShown) {
            if (
              window.innerHeight > mapContainer.getBoundingClientRect().bottom
            ) {
              this.showMap();
              this.yandexMapShown = true;
            }
          }
        },
        { passive: true }
      );
    }
  },
  mounted() {
    this.deferYandexMap()
  }
};
</script>
<style lang="stylus">
.contacts
    margin 0
    padding 32px 16px 32px
    overflow hidden
    box-sizing border-box
    background-color white
    max-width 1280px
    +tablet()
        padding-top 64px
        padding-left 48px
        padding-right 48px
    +desktop()
        margin 0 auto
    &__title
        margin 0
        padding 0
        padding-left 6px
        font-family robotoblack
        font-size 28px
        line-height 33px
        color $darkGrey
        border-left 9px solid $orange
        text-align left
        text-transform uppercase
        +tablet()
          font-size 48px
          line-height 62px
        +tablet-landscape()
          margin-left 88px
          margin-right 88px
    &__content
      +tablet-landscape()
        display flex
        margin-top 64px
    &__text-wrapper
      margin-top 24px
      +tablet()
        padding-left 32px
        padding-bottom 32px
      +tablet-landscape()
        padding-left 64px
    &__subtitle
      margin 0
      padding 32px 0
      font-family robotoblack
      font-size 24px
      line-height 32px
      color $darkGrey
      text-transform uppercase
      +tablet()
        font-size 36px
        line-height auto
      +tablet-landscape()
        padding-top 0
    &__list
      margin 0
      padding 0
      list-style none
    &__list-item
      margin 0
      padding 0
      margin-bottom 24px
    &__list-item-content
      margin 0
      padding 0
      display flex
      align-items center
      text-decoration none
    &__list-item-text
      margin 0
      padding 0
      padding-left 16px
      font-family robotoregular
      line-height auto
      color $darkGrey
      font-size 18px
      +tablet()
        font-size 24px
    &__icon
      display block
      background-size cover
      width 32px
      height 32px
    &__address-icon
      background-image url('~@/assets/address.svg')
    &__phone-icon
      background-image url('~@/assets/phone-orange.svg')
    &__email-icon
      background-image url('~@/assets/email.svg')
    &__whatsapp-icon
      background-image url('~@/assets/whatsapp-orange.svg')
    &__telegram-icon
      background-image url('~@/assets/telegram-orange.svg')
    &__map
      position relative
      height 400px
      width 100%
      overflow hidden
      +tablet-landscape()
        width 50%
        order -1
    &__map-fallback-wrapper
      position absolute
      top 0
      right 0
      left 0
      bottom 0
    &__map-fallback
      height 100%
      width 100%
      object-fit cover
</style>
