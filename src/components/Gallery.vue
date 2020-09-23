<template>
  <section v-on:close-slider="showSlider = false" class="gallery">
    <h2 class="gallery__title">Портфолио</h2>
    <ul class="gallery__list">
      <li
        @click="showSlides(item.id)"
        v-for="item in gallery"
        :key="item.id"
        class="gallery__card"
      >
        <img
          v-lazy="item.thumbnailUrl"
          :alt="item.title"
          class="gallery__card-image"
        />
        <h3 class="gallery__card-title">{{ item.title }}</h3>
        <p class="gallery__card-text">{{ item.text }}</p>
      </li>
    </ul>
    <Slider
      v-if="showSlider"
      @close="showSlider = false"
      :slides="currentSlides"
    />
  </section>
</template>
<script>
import Slider from "@/components/Slider.vue";

export default {
  name: "Gallery",
  components: {
    Slider: Slider
  },
  props: ["gallery"],
  data: () => {
    return {
      showSlider: false,
      currentSlides: []
    };
  },
  methods: {
    showSlides(id) {
      this.gallery.forEach(element => {
        if (element.id == id) this.currentSlides = element.slides;
      });
      this.showSlider = true;
    }
  }
};
</script>
<style lang="stylus">
.gallery
    margin 0
    padding 32px 0px 32px
    overflow hidden
    box-sizing border-box
    background-color $lightGrey
    text-align center
    max-width 1280px
    +tablet()
        padding-top 64px
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
        text-transform uppercase
        +tablet()
          font-size 48px
          line-height 62px
          margin-left 48px
          margin-right 48px
        +tablet-landscape()
          margin-left 88px
          margin-right 88px
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
