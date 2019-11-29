<template>
  <main class="about container">
    <h2 class="about__title fluid-h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet Numquam reiciendis eius, commodi alias in consectetur sit amet</h2>
    <div class="about__text">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut voluptate labore adipisci tempora error, maiores debitis omnis voluptas dolor et aut dolorem iusto. Fugiat deleniti delectus eum. Tempora, quisquam mollitia?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut voluptate labore adipisci tempora error, maiores debitis omnis voluptas dolor et aut dolorem iusto. Fugiat deleniti delectus eum. Tempora, quisquam mollitia?</p>
      <p>
        <AppLink
          :to="{ name: 'catalog' }"
          name="Catalog"
          :external="false"/>
      </p>
    </div>

    <AppImage src="about/about.jpg" :classes="['about__img']" alt="Space Cosmetics"/>
  </main>
</template>

<script>
import AppImage from '@/components/common/AppImage'
import AppLink from '@/components/ui/AppLink'

export default {
  name: 'About',
  components: { AppImage, AppLink }
}
</script>

<style lang="sass">
.about
  padding-bottom: #{$app-gap + $app-gap / 2}

  &__title
    margin: 2.5em 0
    text-align: center
    +r(600)
      margin-top: 10px

  &__text
    max-width: 650px
    margin-left: auto
    +r(900)
      max-width: 100%
    p
      margin-bottom: $app-gap
      line-height: 1.9
      font-weight: 300
      @include fluid-text(12, 16, 480, 900)
      &:last-child
        margin-bottom: 0
    a
      line-height: 1.1
      font-size: 13px
      font-weight: 600
    .link__inner::after
      color: $focus-color

  &__img
    margin-top: #{$app-gap * 3}
    overflow: hidden
</style>