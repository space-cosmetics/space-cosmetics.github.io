<template>
  <main class="container">
    <ul class="grid catalog" ref="catalog">
      <li
        @mouseenter="play"
        @mouseleave="stop"
        ref="items"
        v-for="product in products"
        :key="product._id"
        :class="['item', product.size === 'small' ? 'item-3' : 'item-1']">
        <ProductCard
          :vendor_code="product.vendor_code"
          :name="product.name"
          :price="product.price"
          :type="product.type"
          :size="product.size"
        />
      </li>
    </ul>
  </main>
</template>

<script>
import Isotope from 'isotope-layout'
import ProductCard from '@/components/product/ProductCard'
// import products from '@/data/products'
import audioMixin from '@/mixins/audioMixin'

export default {
  name: 'Catalog',
  data: () => ({
    products: [],
    catalog: null
  }),
  created() {
    this.products = this.$store.getters.products
  },
  // methods: {
  //   addProduct() {
  //     const len = this.products.length
  //     this.products.push(products[len])
  //     setTimeout(() => {
  //       this.catalog.appended(this.$refs.items[len])
  //     }, 0)
  //   }
  // },
  mounted() {
    this.$nextTick(() => {
      this.catalog = new Isotope(this.$refs.catalog, {
        animationEngine: 'best-available',
        itemSelector : '.item',
        layoutMode : 'fitRows',
        transitionDuration: '0.3s',
        hiddenStyle: {
          opacity: 0,
          transform: 'translate3d(0, 10px, 0)'
        },
        visibleStyle: {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)'
        }
      })
    })

    window.onload = () => this.catalog.layout()

  },
  destroyed() {
    this.catalog.destroy()
  },
  mixins: [audioMixin],
  components: { ProductCard }
}
</script>

<style lang="sass">
.catalog
  overflow: hidden
  // li:first-child
  //   .lazy
  //     transform: translate3d(0, 0, 0) !important
</style>
