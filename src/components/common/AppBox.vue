<template>
  <section :class="['box', ...classes]">

    <h4 class="box__title">{{ title }}</h4>

    <p class="box__desc" v-if="description" v-html="description"></p>

    <ul v-if="links.length !== 0">
      <li :class="['box__list-item', horizontal ? 'box__list-item--row' : '']" v-for="(link, i) in links" :key="i">
        <!-- <a :href="link.to">{{ link.name }}</a> -->
        <AppLink :name="link.name" :to="link.to"/>
      </li>
    </ul>

  </section>
</template>

<script>
import AppLink from '@/components/ui/AppLink'

export default {
  name: 'AppBox',
  props: ['title', 'description', 'links', 'classes', 'horizontal'],
  components: { AppLink }
}
</script>

<style lang="sass">
.box

  &__title
    margin: $box-title-margin
    font-size: $box-title-font-size
    font-weight: $box-title-font-weight

  &__desc
    margin: $box-descr-margin
    font-size: $box-descr-font-size
    color: $box-descr-color

  &__list-item
    margin-bottom: $box-list-item-margin-bottom
    font-size: $box-list-item-font-size
    font-weight: $box-list-item-font-weight
    .link__inner::after
      color: $focus-color

    &:last-child
      margin-bottom: 0
      margin-right: 0

    &--row
      float: left
      margin-bottom: 0
      margin-right: $box-list-item-margin-right
</style>