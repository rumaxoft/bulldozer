<template>
  <footer class="footer">
    <div class="footer__content">
      <a href="#" class="footer__logo">
        <img src="@/assets/footer-logo.svg" alt="Bulldozer-logo" />
      </a>
      <p class="footer__copyright">© 2020 BULLDOZER GROUP</p>
      <div class="footer__social">
        <a
          href="#"
          class="footer__social-button footer__instagramm-button reset-button-css"
        >
          <span class="visually-hidden">Мы в instagramm</span>
        </a>
        <a
          href="#"
          class="footer__social-button footer__vkontakte-button reset-button-css"
        >
          <span class="visually-hidden">Мы в vkontakte</span>
        </a>
      </div>
    </div>
    <div class="footer__credits">
      <p class="footer__credits-text">Разработка и внедрение</p>
      <a href="https://www.rumaxoft.ru/" class="footer__credits-logo">
        <span class="visually-hidden">перейти на сайт rumaxoft</span>
        <img src="@/assets/rumaxoft.svg" alt="rumaxoft" />
      </a>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterSection",
  props: ["contacts"],
  data: () => {
    return {
      showMenu: false
    };
  }
};
</script>
<style lang="stylus">
.footer
    margin 0 auto
    padding 0
    max-width 1280px
    &__content
      display flex
      width 100%
      padding 24px 16px
      flex-direction: column
      align-items center
      background-color $darkGrey
    &__logo
        display block
        height 76px
        margin-right 8px

        img
            margin 0
            height 100%
            width auto
    &__copyright
      margin 0
      padding 24px 0 32px
      font-family robotoregular
      font-size 14px
      line-height auto
      color $baige
      text-transform uppercase
    &__social-button
        display block
        width 48px
        height 48px
    &__social
        display flex
        margin-top auto
    &__instagramm-button
        margin-right 24px
        background-image url('~@/assets/instagramm-baige.svg')
        background-repeat none
        background-position center center
    &__vkontakte-button
        background-image url('~@/assets/vkontakte-baige.svg')
        background-repeat none
        background-position center center
    &__credits
      display flex
      flex-direction column
      align-items center
      background-color: $grey
      opacity 0.5
    &__credits-text
      margin 0
      padding 16px
      color $baige
      font-family robotoregular
      font-size 12px
    &__credits-logo
      display block
      padding 0 16px 16px
</style>
