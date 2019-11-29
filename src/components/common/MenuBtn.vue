<template>
  <div class="menu-btn">
    <button
      aria-label="Toggle menu"
      :class="['burger', { 'burger--is-open': isOpen }]"
      @click="$emit('click')">
      <span class="bar bar--uno"></span>
      <span class="bar bar--dos"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MenuBtn',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass">
$menu-btn-size: 20px
$menu-btn-easing: cubic-bezier(.8,0,.55,.94)

.menu-btn
  position: fixed
  bottom: 23px
  left: 50%
  transform: translateX(-50%)
  // background: red
  z-index: 800
  pointer-events: none
  max-width: $app-width
  width: $app-max-width

  +rmin(600)
    display: none

.burger
  position: relative
  left: 10px
  width: $menu-btn-size
  height: $menu-btn-size
  background: $white
  pointer-events: all
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active)
    box-shadow: 0 0 0 10px $white, 0 0 0 11px $gray
    &::before
      display: none
  // box-shadow: 0 0 0 10px $white, 0 0 0 11px $gray, 0 0 10px 11px rgba($black, .2)
  &::before
    content: ''
    position: absolute
    top: -10px
    right: -10px
    bottom: -10px
    left: -10px
    background: $white
    border: 1px solid $gray
    // box-shadow: 0 0 8px rgba($primary-color, .2)

  &:hover,
  &:active
    .bar::before
      transition: transform 800ms
      transform: translate3d(210%, 0, 0)
    .bar--dos::before
      transition-delay: 100ms
  &--is-open
    .bar--uno
      transform: translate3d(0, 0, 0) rotate(-45deg)
    .bar--dos
      transform: translate3d(0, 0, 0) rotate(45deg)

.bar
  position: absolute
  top: 50%
  left: 0
  width: $menu-btn-size
  height: 1px
  background: $primary-color
  overflow: hidden
  transition: transform 300ms $menu-btn-easing

  &--uno
    transform: translate3d(0, #{-$menu-btn-size / 4}, 0)

  &--dos
    transform: translate3d(0, #{$menu-btn-size / 4}, 0)

  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: #{$menu-btn-size / 2}
    height: 1px
    background: $white
    transform: translate3d(-100%, 0, 0)
    transition: none
</style>
