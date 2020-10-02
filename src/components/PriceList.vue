<template>
  <div class="price-list">
    <div class="price-list__content-wrapper">
      <button
        @click="$emit('close')"
        class="price-list__close-button reset-button-css"
      >
        <span class="visually-hidden">закрыть</span>
      </button>
      <div class="price-list__content">
        <div v-if="loading" class="price-list__loading">
          <img
            src="@/assets/loading.svg"
            alt="#"
            class="price-list__loading-image"
          />
        </div>
        <div v-if="error" class="price-list__error">
          <p class="price-list__error-text">
            Не удалось загрузить прайс-лист. Попробуйте позже....
          </p>
        </div>
        <table v-else class="price-list__list">
          <template v-for="(item, index) in priceList">
            <tr
              v-if="item.row == 1"
              :key="index"
              class="price-list__item--header"
            >
              <th class="price-list__item-cell price-list__item-name">
                {{ item.name }}
              </th>
              <th class="price-list__item-cell price-list__item-unit">
                {{ item.unit }}
              </th>
              <th class="price-list__item-cell price-list__item-price">
                {{ item.price }}
              </th>
            </tr>
            <tr
              v-else-if="!item.unit && !item.price"
              :key="index"
              class="price-list__item--header"
            >
              <th
                colspan="3"
                class="price-list__item-cell price-list__item-category"
              >
                {{ item.name }}
              </th>
            </tr>
            <tr v-else :key="index" class="price-list__item">
              <td class="price-list__item-cell price-list__item-name">
                {{ item.name }}
              </td>
              <td class="price-list__item-cell price-list__item-unit">
                {{ item.unit }}
              </td>
              <td class="price-list__item-cell price-list__item-price">
                {{ item.price }}
              </td>
            </tr>
          </template>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PriceList",
  data: () => {
    return {
      loading: false,
      error: false,
      priceList: []
    };
  },
  // props: ["priceList"],
  components: {},
  methods: {
    getPriceList() {
      this.error = false;
      this.loading = true;
      let url =
        "https://spreadsheets.google.com/feeds/cells/17ybNntCpn4ciVizY8VlssdU4U5Ci0KPNLS8cHD63Huk/1/public/full?alt=json";
      this.axios
        .get(url)
        .then(response => {
          let priceList = [];
          response = response.data.feed.entry;
          let row = {};
          response.forEach(element => {
            if (row.row != element.gs$cell.row) {
              if (element.gs$cell.col == 1) {
                if (row.row) {
                  priceList.push(row);
                  row = {};
                }
                row.row = element.gs$cell.row;
                row.name = element.gs$cell.$t;
              }
            }
            if (element.gs$cell.col == 2) {
              row.unit = element.gs$cell.$t;
            }
            if (element.gs$cell.col == 3) {
              row.price = element.gs$cell.$t;
            }
          });
          priceList.push(row);
          this.priceList = priceList;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          this.error = true;
          console.log(err);
        });
    }
  },
  mounted() {
    this.getPriceList();
  }
};
</script>
<style lang="stylus">
.price-list
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $darkGrey
    transition: opacity 0.3s ease;
    display flex
    justify-content center
    align-items center
    +tablet-landscape()
        padding 0 60px
    &__content-wrapper
      width 100%
      height 100%
      background-color white
      padding 48px 0
      position relative
      +tablet()
        max-width 600px
        max-height 80%
        padding 64px 0
    &__content
      width 100%
      height 100%
      padding 0 16px
      background-color white
      overflow-y scroll
      position relative

    &__close-button
        position absolute
        right 16px
        top 16px
        display block
        background-size cover
        width 24px
        height 24px
        background-image url('~@/assets/close-black.svg')
        background-repeat none
        background-position center center
        z-index 110
        +tablet()
            width 32px
            height 32px
            top 24px
            right 24px

    &__loading
      width 100%
      height 100%
      display flex
      justify-content center
      align-items center

    &__loading-image
      width 100%

    &__error
      width 100%
      height 100%
      display flex
      justify-content center
      align-items center

    &__error-text
      font-family robotobold
      font-size 36px
      color $darkGrey
      padding 48px
      text-align center

    &__list
      margin 0
      width 100%
      box-sizing border-box
      border-collapse collapse
      table-layout fixed
    &__item
      font-family robotoregular
      font-size 16px
      line-height auto
      color $darkGrey
      &:nth-of-type(odd)
        background-color $lightGrey
      &--header
        font-family robotobold
        font-size 16px
        line-height auto
        color $darkGrey
        background-color $baige
    &__item-cell
      padding 16px 8px
      // word-break break-word

    &__item-category
      width 100%
      padding-top 1.5em
      padding-bottom 1.5em
      background-color $grey
      position sticky
      top 0

    &__item-price
      text-align right
      width 20%
      +tablet()
        width 10%
    &__item-unit
      text-align center
      word-break break-word
      width 20%
      +tablet()
        width 10%
</style>
