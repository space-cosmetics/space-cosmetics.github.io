<template>
  <main class="container">
    <div class="grid product">

      <div class="product__info item item-2">

        <h1 class="product__title">{{ product.name }}</h1>
        <ul class="product__list">
          <li class="product__item">Цена: <span>{{ product.price }}</span> руб.</li>
          <li class="product__item">Объем: <span>{{ product.volume }}</span> мл.</li>
          <li class="product__item">Тип: <span>{{ product.type }}</span></li>
          <li class="product__item">Производитель: <span>{{ product.manufacturer }}</span></li>
          <li class="product__item">Год: <span>2019</span></li>
        </ul>

        <ul class="product__list">
          <li class="product__item">Категории: auto, washing</li>
        </ul>

      </div>

      <div class="item item-2">
        <p class="product__text">{{ product.description }}</p>
      </div>
    </div>

    <ul class="product__media">

      <li>
        <AppImage
          :src="`products/${product.name.toLocaleLowerCase().replace(' ', '-')}/big.jpg`"
          :alt="product.name"/>
      </li>

      <!-- <li v-if="product.media.video.id"> -->
        <!-- <ProductVideo id="bTqVqk7FSmY"/> -->
      <!-- </li> -->

    </ul>
  </main>
</template>

<script>
// import ProductVideo from '@/components/product/ProductVideo'
import products from '@/data/products'
import AppImage from '@/components/common/AppImage'

export default {
  name: 'Product',
  data: () => ({
    product: null
  }),
  created() {
    this.product = products.find(({ vendor_code }) => vendor_code === parseInt(this.$route.query.article))

  },
  mounted() {
    document.title = `${this.product.name} | Space Cosmetics`
  },
  // components: { ProductVideo, AppImage }
  components: { AppImage }
}
</script>

<style lang="sass">
.product
  padding-top: 30px

  &__title
    font-size: 20px
    font-weight: 600

  &__list
    color: $secondary-color
    font-size: 12px
    margin-top: 45px

  &__item
    margin-bottom: 10px
    span
      color: $black

  &__text
    font-size: 18px
    font-weight: 300
    margin-bottom: 30px
    &:last-child
      margin-bottom: 0

  &__media
    margin-top: 60px
    padding-bottom: 45px
    li
      margin-bottom: 30px
      &:last-child
        margin-bottom: 0
</style>
