<template>
  <div :class="['img', ...classes]">
    <img
      :class="['img__src', { 'img__src--is-loading':isLoading }]"
      :src="require(`@/assets/images/${src}`)"
      :alt="alt"
      @load="isLoading = false">
  </div>
</template>

<script>
export default {
  name: 'AppImage',
  data: () => ({
    isLoading: true
  }),
  props: ['classes', 'src', 'alt']
}
</script>

<style lang="sass">
.img
  position: relative
  padding-top: 53%
  overflow: hidden
  background: $gray

  &__src
    position: absolute
    top: 50%
    left: 50%
    width: 100%
    height: auto
    transform: translate(-50%, -50%)
    transition: opacity 300ms

    &--is-loading
      opacity: 0
</style>
