<template>
  <div :class="['nav pattern', { 'nav--is-open': isOpen }]">
    <div class="nav__scroller">
      <div class="nav__logo" @click="$emit('click')"><LogoSvg/></div>

      <nav class="nav__inner">

        <ul class="nav__list" @click="$emit('click')">
          <li
            class="nav__item"
            v-for="(link, index) in links"
            :key="index"
            @mouseenter="play">
              <AppLink
                :to="link.to"
                :name="link.name"
                :external="false"
                :classes="['nav__link f-gray']"/>
          </li>
        </ul>

      </nav>

      <ul class="nav__contact">
        <li>
          <AppLink
            :to="'tel:+79992076689'"
            :name="'+7(999) 207 66 89'"
            :external="true"
            :classes="['nav__link']"/>
          </li>
        <li>
          <AppLink
            :to="'tel:+79992076689'"
            :name="'solovyev.a@icloud.com'"
            :external="true"
            :classes="['nav__link']"/>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppLink from '@/components/ui/AppLink'
import audioMixin from '@/mixins/audioMixin'
import LogoSvg from '@/components/ui/LogoSvg'

export default {
  name: 'AppNavbar',
  mixins: [audioMixin],
  props: {
    links: {
      type: Array,
      required: true
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  components: { AppLink, LogoSvg }
}
</script>

<style lang="sass">
$nav-font-size: 14px
$nav-margin: $app-gap

.exact-active
  .link__inner
    transform: translate3d(0, -100%, 0)

.nav
  display: flex

  &__contact
    display: none

  &__logo
    display: none

  &__item
    // line-height: 1.2
    float: left
    font-size: $nav-font-size
    margin-left: $nav-margin
    &:first-child
      margin-left: 0

  &__link

    .link__inner
      font-weight: 300
      &::after
        color: $primary-color
        font-weight: 500
        white-space: nowrap

  +r(600)
    position: fixed
    top: 0
    left: 0
    display: flex
    width: 100%
    height: 100%
    background-color: $white
    border: 10px solid $white
    z-index: 400
    transform: translateX(-100%)
    transition: opacity 400ms, transform 0s 400ms
    opacity: 0
    &--is-open
      opacity: 1
      transition: opacity 400ms, transform 0s
      transform: translateX(0%)
      .nav__item
        @for $i from 1 through 3
          &:nth-child(#{$i})
            .nav__link
              transition: transform 400ms #{$i * 50 + ms}
      .nav__link
        transform: translate3d(0, 0, 0)

    &__scroller
      display: flex
      flex-direction: column
      width: 100%
      padding: 35px 0 8px 0

    &__inner
      margin: auto

    &__logo
      display: block
      text-align: center

    &__contact
      // position: absolute
      // bottom: 10px
      // left: 50%
      display: block
      // transform: translate(-50%, 0)
      font-size: 12px
      text-align: center
      li
        &:first-child
          margin-bottom: 2px

    &__list
      text-align: center
      // margin: 30px 0

    &__item
      float: none
      margin: 0 0 .5em 0
      overflow: hidden
      @include fluid-text(26, 40, 320, 600)

    &__link
      transform: translate3d(0, 110%, 0)
      transition: none
      padding: 0 3px
</style>
