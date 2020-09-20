<template>
  <section class="services">
    <h2 class="services__title">Услуги</h2>
    <ul class="services__list">
      <li
        v-for="(serviceCard, index) in serviceCards"
        :key="index"
        class="services__card"
      >
        <img
          :src="serviceCard.imageUrl"
          :alt="serviceCard.title"
          class="services__card-image"
        />
        <h3 class="services__card-title">{{ serviceCard.title }}</h3>
        <p class="services__card-text">{{ serviceCard.text }}</p>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "Services",
  props: ["serviceCards"],
  data: () => {
    return {};
  }
};
</script>
<style lang="stylus">
.services
    margin 0
    padding 32px 0px 32px
    overflow hidden
    box-sizing border-box
    background-color $lightGrey
    text-align center
    max-width 1280px
    +tablet()
        padding-top 64px
        background-image url('~@/assets/services-background.svg')
        background-repeat no-repeat
        background-position right bottom
    +desktop()
        margin 0 auto
    &__title
        margin 0
        padding 0
        margin-left 16px
        padding-left 6px
        font-family robotoblack
        font-size 28px
        line-height 33px
        color $darkGrey
        border-left 9px solid $orange
        text-align left
        +tablet()
            font-size 48px
            line-height 62px
    &__list
        margin 0 auto
        padding 0
        width 100%
        column 1
        column-gap 10px
        flex-direction column
        align-items center
        list-style none
        +tablet()
            column-count 2
            column-gap 24px
            width 727px
        +desktop()
            column-count 3
            width 1103px
    &__card
        margin 0
        padding 0
        display inline-block
        width 300px
        background-color white
        margin-top 24px
        text-align left
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        +tablet()
            width 351px
    &__card-image
        width 100%
        height 74.93%
        object-fit cover
    &__card-title
        margin 0
        padding 16px
    &__card-text
        margin 0
        padding 0 16px 16px
</style>
