<template>
  <header class="header container">

    <AppLogo/>

    <AppNavbar :links="links" :isOpen="isOpen" @click="isOpen = false"/>

    <MenuBtn :isOpen="isOpen" @click="isOpen = !isOpen" />

  </header>
</template>

<script>
import AppLogo from '@/components/common/AppLogo'
import AppNavbar from '@/components/common/AppNavbar'
import MenuBtn from '@/components/common/MenuBtn'
import links from '@/data/navbar'

export default {
  name: 'AppHeader',
  data: () => ({
    links,
    isOpen: false
  }),
  watch: {
    isOpen: (isOpen) => {
      isOpen ? document.body.classList.add('overflow') : document.body.classList.remove('overflow')
    }
  },
  components: { AppLogo, AppNavbar, MenuBtn }
}
</script>

<style lang="sass">
/**
 * Header
 */
$header-padding: #{$app-gap * 2} 0
$header-padding-mobile: #{$app-gap * 1.5} 0

.header
  display: flex
  // justify-content: center
  padding: $header-padding
  justify-content: space-between
  align-items: center
    // justify-content: space-between
  +r(600)
    padding: $header-padding-mobile
</style>