<template>
  <transition name="modal">
    <div class="slider">
      <button
        @click="$emit('close')"
        class="slider__close-button reset-button-css"
      >
        <span class="visually-hidden">закрыть</span>
      </button>
      <carousel
        :perPage="1"
        :navigationEnabled="true"
        :navigationClickTargetSize="0"
      >
        <slide v-for="(slide, index) in slides" :key="index">
          <div class="slider__slide">
            <img class="slider__slide-image" v-lazy="slide.imageUrl" alt="#" />
          </div>
        </slide>
      </carousel>
    </div>
  </transition>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  data: () => {
    return {};
  },
  props: ["slides"],
  components: {
    Carousel,
    Slide
  }
};
</script>
<style lang="stylus">
.slider
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $darkGrey
    transition: opacity 0.3s ease;
    +tablet-landscape()
        padding 0 60px

    &__close-button
        position absolute
        right 16px
        top 16px
        display block
        background-size cover
        width 24px
        height 24px
        background-image url('~@/assets/close.svg')
        background-repeat none
        background-position center center
        z-index 110
        +tablet()
            width 32px
            height 32px
            top 24px
            right 24px

    &__slide
        margin-top 10vh
        height 70vh
        display flex
        justify-content center
        align-items center
    &__slide-image
        display block
        width 100%
        height 100%
        object-fit contain
        +tablet-landscape()
            max-width 80vw
.VueCarousel-navigation-button[data-v-453ad8cd]
    color $baige
    font-size 36px

// Vue transition styles
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}
</style>
