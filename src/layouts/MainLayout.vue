<template>
  <div :class="[...classNames]">

    <AppHeader/>

    <slot/>

    <AppFooter/>

    <AppScroller v-if="!isMobile"/>

    <AppPreloader v-if="isLoading" @load="isLoading = false"/>

    <AppCursor v-if="!isMobile"/>

  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/AppFooter'
import AppScroller from '@/components/common/AppScroller'
import AppPreloader from '@/components/common/AppPreloader'
import AppCursor from '@/components/common/AppCursor'
import isMobile from '@/utils/isMobile'

export default {
  name: 'MainLayout',
  data: () => ({
    isLoading: true,
    isMobile
  }),
  props: {
    classNames: {
      type: Array,
      default: () => ['app'],
      validator: names => names.every(name => typeof name === 'string'),
    }
  },
  components: { AppHeader, AppFooter, AppScroller, AppPreloader, AppCursor }
}
</script>

<style lang="sass">
.space-cosmetics
  background: $white
  box-shadow: 0 0 10px rgba($black, .3)
  // will-change: transform, opacity
</style>
