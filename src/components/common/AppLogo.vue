<template>
  <h1 class="logo">
    <router-link :to="{ name: 'catalog' }" aria-label="Home">
      <LogoSvg/>
    </router-link>
  </h1>
</template>

<script>
import LogoSvg from '@/components/ui/LogoSvg'

export default {
  name: 'AppLogo',
  components: { LogoSvg }
}
</script>

<style lang="sass">
/**
 * AppLogo
 */
// $logo-font-size: 18px
// $logo-font-weight: 500
// $logo-font-let-spacing: 2px

.logo
  line-height: 0
  // position: relative
  // font-size: $logo-font-size
  // font-weight: $logo-font-weight
  // letter-spacing: $logo-font-let-spacing
  // text-transform: uppercase
  // z-index: 500

  +r(600)
    // font-size: 16px
    // display: block
    margin: 0 auto
    // transform: translateX(20px)
</style>