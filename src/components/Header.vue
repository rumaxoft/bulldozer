<template>
  <div class="header__wrapper">
    <header class="header">
      <a href="#" class="header__logo">
        <img src="@/assets/logo.svg" alt="Bulldozer-logo" />
      </a>
      <!-- Desktop navigation -->
      <nav class="header__desktop-nav">
        <ul class="header__desktop-nav-list">
          <li
            v-for="link in links"
            :key="link.name"
            class="header__desktop-nav-link"
          >
            {{ link.name }}
          </li>
        </ul>
      </nav>
      <!-- /Desktop navigation -->

      <div class="header__contacts">
        <div class="header__phone-group">
          <a
            :href="`tel:${phoneNumber.code}`"
            class="header__button header__phone-button reset-button-css"
          >
            <span class="visually-hidden">Позвоните нам</span>
          </a>
          <span class="header__phone-number">{{ phoneNumber.human }}</span>
        </div>
        <a
          href="#"
          class="header__button header__telegram-button reset-button-css"
        >
          <span class="visually-hidden">Напишите нам в telegram</span>
        </a>
        <a
          href="#"
          class="header__button header__whatsapp-button reset-button-css"
        >
          <span class="visually-hidden">Напишите нам в whatsapp</span>
        </a>
      </div>
      <button
        @click="showMenu = true"
        class="header__menu-button header__button reset-button-css"
      >
        <span class="visually-hidden">меню</span>
      </button>
      <!-- Mobile navigation -->
      <nav
        class="header__mobile-nav"
        v-bind:class="{ 'header__mobile-nav--active': showMenu }"
      >
        <button
          @click="showMenu = false"
          class="header__close-button header__button reset-button-css"
        >
          <span class="visually-hidden">меню</span>
        </button>
        <ul class="header__mobile-nav-list">
          <li
            v-for="link in links"
            :key="link.name"
            class="header__mobile-nav-link"
          >
            {{ link.name }}
          </li>
        </ul>
        <div class="header__social">
          <a
            href="#"
            class="header__social-button header__instagramm-button reset-button-css"
          >
            <span class="visually-hidden">Мы в instagramm</span>
          </a>
          <a
            href="#"
            class="header__social-button header__vkontakte-button reset-button-css"
          >
            <span class="visually-hidden">Мы в vkontakte</span>
          </a>
        </div>
      </nav>
      <!-- /Mobile navigation -->
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: ["links", "phoneNumber"],
  data: () => {
    return {
      showMenu: false
    };
  }
};
</script>
<style lang="stylus">
.header
    margin 0 auto
    padding 0 16px
    display flex
    width 100%
    align-items center
    justify-content space-between
    background-color white
    height 48px
    max-width 1280px
    +tablet()
        height 60px
        padding 0 24px
    &__wrapper
        position fixed
        width 100%
        top 0
        right 0
        left 0
    &__logo
        display block
        height 32px
        +tablet()
            height 48px
        img
            height 100%
            width auto
    &__desktop-nav
        display none
        margin 0
        padding 0
        +tablet-landscape()
            display block
    &__desktop-nav-list
        list-style none
        margin 0
        padding 0
        display flex
    &__desktop-nav-link
        margin 0
        padding 0 8px
        font-family robotobold
        font-size 14px
        line-height 16px
        color $darkGrey
    &__contacts
        display flex
    &__phone-group
        display flex
        align-items center
        margin-right 16px
    &__phone-number
        display none
        +tablet()
            display block
            font-family robotobold
            font-size 18px
            line-height 21px
            color $orange
    &__button
        display block
        background-size cover
        width 24px
        height 24px
        +tablet()
            width 32px
            height 32px
    &__menu-button
        background-image url('~@/assets/menu.svg')
        +tablet-landscape()
            display none
    &__phone-button
        background-image url('~@/assets/phone-grey.svg')
    &__telegram-button
        margin-right 16px
        background-image url('~@/assets/telegram-grey.svg')
    &__whatsapp-button
        background-image url('~@/assets/whatsapp-grey.svg')
    &__mobile-nav
        padding 12px 16px 24px
        position fixed
        display flex
        align-items center
        flex-direction column
        top 0
        left 0
        right 0
        bottom 0
        transition transform 0.3s
        transition-timing-function ease
        transform translateX(100vw)
        background-color $darkGrey
        opacity 0.95
        z-index 10
        +tablet()
            left 50%
        &--active
            transform translateX(0)
    &__close-button
        background-image url('~@/assets/close.svg')
        background-repeat none
        background-position center center
        align-self flex-end
    &__mobile-nav-list
        margin 0
        padding 0
        padding-top 24px
        list-style none
    &__mobile-nav-link
        margin-bottom 32px
        font-family robotobold
        color $baige
        font-size 24px
        line-height 28px
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
</style>
