<template>
  <section class="info">
    <h3 class="info__price" itemprop="price">{{ price }}р.</h3>
    <h2 class="info__name" itemprop="name">{{ name }}</h2>
    <p class="info__type f-gray">{{ type }}</p>
  </section>
</template>

<script>
export default {
  name: 'ProductCardInfo',
  props: {
    price: {
      type: [String, Number],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
.info
  padding: #{$app-gap / 2} 0

  &__price
    position: relative
    top: 1px
    float: right
    // font-size: $card-price-font-size
    @include fluid-text(12, 14, 480, 900)
    font-weight: 500
    font-feature-settings: 'lnum' 1

  &__name
    // font-size: $card-name-font-size
    @include fluid-text(14, 16, 480, 900)
    font-weight: 500

  &__type
    font-size: 13px
    font-weight: 300
    // @include fluid-text(12, 13, 480, 900)
    margin-top: .2em
    +r(600)
      font-size: 12px
</style>
