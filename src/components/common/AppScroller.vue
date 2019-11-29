<template>
  <button
    :class="['scroller', isVisible ? 'scroller--is-visible' : '']"
    @click="scrollTop"
    aria-label="Scroll to top"></button>
</template>

<script>
export default {
  name: 'AppScroller',
  data: () => ({
    isVisible: false
  }),
  mounted() {
    window.addEventListener('scroll', this.toggleButton)
    this.toggleButton()
  },
  destroyed() {
    window.removeEventListener('scroll', this.toggleButton)
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    },
    toggleButton() {
      const fromTop = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0)
      fromTop > 100 ? this.isVisible = true : this.isVisible = false
    }
  }
}
</script>

<style lang="sass">
$scroller-color: $primary-color

.scroller
  position: fixed
  right: 25px
  bottom: 20px
  width: 25px
  height: 25px
  background: none
  transform: translate3d(0, 50px, 0)
  transition: transform 250ms

  &:hover,
  &:active
    &::after
      border-color: $focus-color

  &::after
    content: ''
    position: absolute
    top: 11px
    left: 8px
    display: block
    width: 10px
    height: 10px
    border-top: 2px solid $scroller-color
    border-left: 2px solid $scroller-color
    transform: rotate(45deg)

  &--is-visible
    transform: translate3d(0, 0, 0)

</style>