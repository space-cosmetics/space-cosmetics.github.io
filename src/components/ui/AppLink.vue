<template>
  <a :class="[...classes, 'link']" :href="to" v-if="external">
    <span class="link__inner" :data-hover="name">{{ name }}</span>
  </a>

  <router-link :class="[...classes, 'link']" :to="to" v-else>
    <span class="link__inner" :data-hover="name">{{ name }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'AppLink',
  props: {
    name: {
      type: String,
      default: 'Link'
    },
    to: {
      type: [String, Object],
      default: '#'
    },
    external: {
      type: Boolean,
      default: true
    },
    classes: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass">
.link
  display: inline-block
  overflow: hidden
  // white-space: nowrap
  // background: red

  &__inner
    position: relative
    display: inline-block
    // transition: none
    transition: transform 0.3s
    // font-weight: 300

    &::after
      content: attr(data-hover)
      position: absolute
      top: 100%
      left: 0
      // font-weight: 500
      transform: translate3d(0,0,0)

  &:hover,
  &:active
    .link__inner
      // transition: transform 0.3s
      transform: translate3d(0, -100%, 0)
      // transform: translateY(-100%)
</style>
