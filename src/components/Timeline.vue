<template>
  <section id="timeline" class="timeline">
    <h2 class="timeline__title">Порядок работы</h2>
    <ul class="timeline__list">
      <li
        v-for="(item, index) in timelineList"
        :key="index"
        class="timeline__item"
      >
        <div class="timeline__icon-container">
          <img
            :src="item.iconUrl"
            class="timeline__item-icon"
            :alt="item.title"
          />
        </div>
        <div class="timeline__item-text-block">
          <h3 class="timeline__item-title">{{ item.title }}</h3>
          <p class="timeline__item-text">{{ item.text }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      timelineList: [
        {
          title: "Составляем смету",
          text: "Обговаривам виды работ и составляем предварительную смету.",
          iconUrl: require("@/assets/timeline/calculation.svg")
        },
        {
          title: "Подписываем договор",
          text:
            "В договоре прописываем стоимость работ и материалов, сроки сдачи результатов работ и гарантии.",
          iconUrl: require("@/assets/timeline/contract.svg")
        },
        {
          title: "Закупаем материалы",
          text:
            "Партнерские отношения с крупнейшими поставщиками строительных материалов в регионе позволяют нам закупать материалы по ценами, существенно ниже среднерыночных.",
          iconUrl: require("@/assets/timeline/materials.svg")
        },
        {
          title: "Проводим ремонтные и строительные работы",
          text:
            "Проводим ремонтные и строительные работы по строго оговоренному графику и отчитываемся о проделанной работе по каждому этапу работ.",
          iconUrl: require("@/assets/timeline/construction.svg")
        },
        {
          title: "Прием работы + гарантии",
          text: "Сдаем выполненные работы и предоставляем на них гарантию.",
          iconUrl: require("@/assets/timeline/finish.svg")
        }
      ]
    };
  }
};
</script>
<style lang="stylus">
.timeline
    margin 0 auto
    padding 48px 16px 32px
    overflow hidden
    box-sizing border-box
    background-color $baige
    max-width 1280px
    +tablet()
      padding-left 48px
      padding-right 48px
    +tablet-landscape()
      padding-left 88px
      padding-right 88px
    &__title
        margin 0
        padding 0
        padding-left 6px
        font-family robotoblack
        font-size 28px
        line-height 33px
        color $darkGrey
        text-transform uppercase
        border-left 9px solid $orange
        text-align left
        align-self flex-start
        +tablet()
            font-size 48px
            line-height 62px
    // &__list-wrapper
    //   display flex
    //   justify-content center
    &__list
        margin 0
        padding 0
        margin-top 48px
        list-style none
        width 100%
        display flex
        flex-direction column
        align-items center
    &__item
        margin 0
        padding 0
        display flex
        flex-direction column
        border-left 7px solid $darkGrey
        margin 0
        padding 0
        +tablet()
            flex-direction row
            justify-content center
            width 100%
            border none
        &:nth-of-type(even)
          .timeline__icon-container
            +tablet()
              order: 1
          .timeline__item-text-block
            +tablet()
              border-right 8px solid $darkGrey
              padding-left 0
              padding-right 64px
        &:nth-of-type(odd)
          .timeline__icon-container
            +tablet()
              transform scaleX(-1)
          .timeline__item-text-block
            +tablet()
              border-left 8px solid $darkGrey
              padding-left 64px
    &__icon-container
        margin 0
        margin-left -10px
        display flex
        align-items center
        padding 16px 0
        width 218px
        height auto

        +tablet()
          margin 0
          width 292px
    &__item-icon
      width 218px
      +tablet()
        width 264px
        margin-left -12px
    &__item-text-block
        max-width 260px
        padding-left 24px
        +tablet()
          width 300px
          max-width none
          display flex
          flex-direction column
          justify-content center
    &__item-title
        margin 0
        padding 0
        font-family robotoblack
        font-size 24px
        line-height normal
        text-align center
        color $darkGrey
    &__item-text
        margin 0
        padding 8px 0 24px
        font-family robotoregular
        font-size 18px
        line-height normal
        color $darkGrey
</style>
