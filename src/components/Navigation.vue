<template>
  <transition appear name="navigation">
    <div @click.self="$emit('close')" class="navigation">
      <div class="navigation__content-wrapper">
        <div class="navigation__content">
          <p class="navigation__title">
            Проложить маршрут:
          </p>
          <div class="navigation__links-container">
            <a
              :href="
                `google.navigation:q=${coords.latitude},${coords.longitude}&amp;mode=d`
              "
              class="navigation__link"
            >
              <span
                class="navigation__link-icon navigation__link-icon--google-maps"
              ></span>
              <span class="navigation__link-text">Google карты</span>
            </a>
            <a
              :href="
                `yandexnavi://build_route_on_map?lat_to=${coords.latitude}&lon_to=${coords.longitude}`
              "
              class="navigation__link"
            >
              <span
                class="navigation__link-icon navigation__link-icon--yandex-nav"
              ></span>
              <span class="navigation__link-text">Яндекс навигатор</span>
            </a>
            <a
              :href="
                `yandexmaps://build_route_on_map?lat_to=${coords.latitude}&lon_to=${coords.longitude}`
              "
              class="navigation__link"
            >
              <span
                class="navigation__link-icon navigation__link-icon--yandex-maps"
              ></span>
              <span class="navigation__link-text">Яндекс карты</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Navigation",
  data: () => {
    return {
      coords: {
        latitude: 45.03862840705398,
        longitude: 39.00404710615154
      }
    };
  }
};
</script>
<style lang="stylus">
.navigation
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color rgba(0,0,0,0.75)
    transition: opacity 0.3s ease;
    display flex
    justify-content center
    align-items flex-end
    +tablet-landscape()
        padding 0 60px
    &__content-wrapper
      background-color white
      padding 24px 0
      width 100%
      position relative
      transition: all 0.3s ease;
      // transform translateY(100%)
      +tablet()
        max-width 600px
    &__content
      padding 0 16px
      background-color white
    &__title
      font-family robotobold
      font-size 18px
      color $darkGrey
      text-align center
    &__links-container
      display flex
      justify-content center
      margin-top 36px
      width 100%
    &__link
      display flex
      flex-direction column
      align-items center
      width 100px
      text-decoration none
    &__link-icon
      display block
      background-size cover
      width 36px
      height 36px
      &--google-maps
        background-image url('~@/assets/Google_Maps_icon.svg')
      &--yandex-nav
        background-image url('~@/assets/YandexNavigatorLogo.svg')
      &--yandex-maps
        background-image url('~@/assets/YandexMaps.svg')
    &__link-text
      display block
      margin-top 8px
      font-family robotoregular
      font-size 16px
      color $grey
      text-align center

// Vue transition styles
.navigation-enter {
  opacity: 0;
}

.navigation-leave-active {
  opacity: 0;
}

.navigation-enter .navigation__content-wrapper,
.navigation-leave-active .navigation__content-wrapper {
  transform: translateY(100%);
}
</style>
