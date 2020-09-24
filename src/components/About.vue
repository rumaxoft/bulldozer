<template>
  <section id="about" class="about">
    <div class="about__text-wrapper">
        <h2 class="about__title">О нас</h2>
        <p class="about__text">
        Товарищи! постоянное информационно-пропагандистское обеспечение нашей
        деятельности в значительной степени обуславливает создание соответствующий
        условий активизации. Значимость этих проблем настолько очевидна, что
        консультация с широким активом позволяет оценить значение модели развития.
        Разнообразный и богатый опыт рамки и место обучения кадров позволяет
        оценить значение системы обучения кадров, соответствует
        </p>
    </div>
  </section>
</template>
<script></script>
<style lang="stylus">
.about
    margin 0
    padding 48px 16px 32px
    overflow hidden
    box-sizing border-box
    background-color white
    max-width 1280px
    +tablet()
        padding-top 64px
        padding-right 64px
        padding-bottom 64px
        min-height 600px
        background-image url('~@/assets/about-painter.png'), url('~@/assets/about-background.svg')
        background-repeat no-repeat
        background-size 424px auto, 700px auto
        background-position right 696px top 60px, right 800px top 56px
    +desktop()
        margin 0 auto
    &__text-wrapper
        +tablet()
            width 654px
            margin-left auto
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
        +tablet()
            font-size 48px
            line-height 62px
    &__text
        margin 0
        padding 0
        margin-top 32px
        font-family robotoregular
        font-size 18px
        line-height 150%
        color $darkGrey
        +tablet()
            font-size 24px
            padding-left 48px
</style>
