<template>
  <ul class="credits">
    <li class="credits__link">© {{ (new Date()).getFullYear() }} Space Cosmetics, Inc</li>
    <li class="credits__link"><router-link to="/">Terms of use</router-link></li>
    <li class="credits__link"><router-link to="/">Privacy policy</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'AppCredits'
}
</script>

<style lang="sass">
.credits
  display: flex
  width: 100%
  pointer-events: none
  cursor: default

  &__link
    position: relative
    margin-right: 15px
    color: $credits-font-color
    font-size: $credits-font-size
    font-weight: $credits-font-weight
    // letter-spacing: 1px
    font-feature-settings: 'lnum' 1

    &:last-child
      margin-right: 0

      &::after
        display: none

    &::after
      content: ''
      position: absolute
      top: 6px
      right: -9px
      display: block
      width: 2px
      height: 2px
      background: currentColor
</style>