<template>
  <div class="cursor" ref="cursor"></div>
</template>

<script>
import Cursor from '@/utils/Cursor'

export default {
  name: 'AppCursor',
  data: () => ({
    cursor: null
  }),
  mounted() {
    this.cursor = new Cursor(this.$refs.cursor)
    this.cursor.init()
  },
  methods: {
  }
}
</script>

<style lang="sass">
$cursor-size: 14px
.cursor
  position: fixed
  top: 0
  left: 0
  z-index: 999
  width: $cursor-size
  height: $cursor-size
  margin-top: #{-$cursor-size / 2}
  margin-left: #{-$cursor-size / 2}
  border-radius: 50%
  background: $black
  // transform: translate(-50%, -50%)
  pointer-events: none
  opacity: .1
  transition: opacity 300ms, transform 300ms

  &--is-pressed
    transform: scale3d(1.8, 1.8, 1.8)
    opacity: 0.04

  &--is-hidden
    opacity: 0
</style>
