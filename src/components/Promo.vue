<template>
  <section class="promo">
      <div class="promo__action-group">
          <h1 class="promo__title">Все виды строительных работ в Краснодаре</h1>
          <button class="promo__button reset-button-css"><span>Прайс-лист</span></button>
      </div>
  </section>
</template>
<script></script>
<style lang="stylus">
.promo
    margin 0
    padding 0
    overflow hidden
    padding-top 490px
    box-sizing border-box
    min-height 764px
    background-color white
    background-image url('~@/assets/promo-main-image.png'), url('~@/assets/promo-background.svg')
    background-repeat no-repeat
    background-position top 40px center, top center
    background-size 280px auto, auto auto
    max-width 1280px
    +tablet()
        padding-top 200px
        padding-left 48px
        background-image url('~@/assets/promo-main-image-desktop.png'), url('~@/assets/promo-background.svg')
        background-size 417px auto, auto auto
        background-position left 52vw top 72px, left 35vw top
    +tablet-landscape()
        padding-left 88px
        background-position left 50vw top 72px, left 38vw top
    +desktop()
        background-position right 193px top 72px, right top
        margin 0 auto
    &__action-group
        width: 280px
        margin 0 auto
        text-align center
        +tablet()
            width 490px
            text-align left
            margin 0
    &__title
        margin 0
        padding 0
        padding-left 12px
        font-family robotoblack
        font-size 36px
        line-height 34px
        color $baige
        border-left 12px solid $orange
        text-align left
        +tablet()
            font-size 64px
            line-height 62px
            color $darkGrey
    &__button
        margin-top 56px
        padding 16px 32px
        border-radius 32px
        background-color $orange
        +tablet()
            margin-top 64px
        span
            font-family robotoblack
            font-size 14px
            line-height 16px
            text-transform uppercase
            color $baige
</style>
