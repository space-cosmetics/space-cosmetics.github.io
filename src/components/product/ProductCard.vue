<template>
  <router-link :to="{ name: 'product', query: { article: vendor_code } }" :class="['card', { 'card--is-loading': isLoading }]">

    <ProductCardThumbnail
      :name="name"
      :size="size"
      :alt="name"
      :itemprop="'thumbnail'"
      @load="isLoading = false"/>

    <ProductCardInfo
      :price="price"
      :name="name"
      :type="type"/>

  </router-link>
</template>

<script>
import ProductCardThumbnail from '@/components/product/ProductCardThumbnail'
import ProductCardInfo from '@/components/product/ProductCardInfo'

export default {
  name: 'ProductCard',
  data: () => ({
    isLoading: true,
  }),
  props: ['name', 'price', 'type', 'size', 'vendor_code'],
  components: { ProductCardThumbnail, ProductCardInfo }
}
</script>

<style lang="sass">
$thumbnail-overlay-opacity: 0.8

.card
  position: relative
  display: block
  opacity: 1
  transform: translate3d(0, 0, 0)
  transition: opacity 500ms, transform 500ms
  will-change: transform, opacity

  &--is-loading
    opacity: 0
    transform: translate3d(0, 30px, 0)

  &:hover,
  &:active,
  &:focus
    .thumbnail
      &::after
        opacity: $thumbnail-overlay-opacity
      &__img
        // transform: translate3d(-50%, -50%, 0) scale3d(0.96, 0.96, 0.96) rotate(2deg)
        transform: translate3d(-50%, -50%, 0) scale3d(0.96, 0.96, 0.96)
</style>