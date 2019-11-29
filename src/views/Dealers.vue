<template>
  <main class="container dealers">
    <DealersMap/>

    <h1 class="dealers__title fluid-h1">"Space Cosmetics" молодая и быстрорастущая компания, которая рада предоставить выгодные условия для дилеров из других регионов. Мы заинтересованы в сотрдничестве с Вами.</h1>

    <div class="dealers__ad">
      <dl class="dealers__list">
        <dt>Санкт-Петербург</dt>
        <dd v-for="link in links" :key="link._id">
          <p>{{ link.title }}:</p>
          <AppLink
            :external="true"
            :to="link.to"
            :name="link.name"/>
        </dd>
      </dl>
    </div>
  </main>
</template>

<script>
import DealersMap from '@/components/dealers/DealersMap'
import AppLink from '@/components/ui/AppLink'

export default {
  name: 'Dealers',
  data: () => ({
    links: [
      {
        _id: 0,
        title: 'Адрес',
        to: 'https://goo.gl/maps/ttQKmbAvbCxi7jPL6',
        name: 'ул. Заусадебная 31'
      },
      {
        _id: 1,
        title: 'Телефон',
        to: 'tel:+79118188067',
        name: '+7(911) 818-80-67'
      },
      {
        _id: 2,
        title: 'Почта',
        to: 'mailto:zakaz@himprofline.ru',
        name: 'zakaz@himprofline.ru'
      },
      {
        _id: 3,
        title: 'Сайт',
        to: 'https://himprofline.ru/',
        name: 'himprofline.ru'
      },
    ]
  }),
  components: { DealersMap, AppLink }
}
</script>

<style lang="sass">
.dealers
  padding: 30px 0 30px 0
  &__title
    margin: 90px 0
    text-align: center

  &__ad
    display: flex
    flex-direction: column
    align-items: center
    +r(680)
      display: block

  &__list
    display: inline-block
    // max-width: 600px
    // background: red
    // margin: 30px auto
    margin-bottom: 35px
    // &:hover
    //   dt
    //     color: $focus-color

    dt
      float: left
      font-size: 22px
      font-weight: 500
      margin-bottom: 20px
      +r(680)
        float: none

    dd
      margin-left: 400px
      margin-bottom: 20px
      transition: .3s
      +r(800)
        margin-left: 300px
      +r(680)
        margin-left: 0

      p
        color: $secondary-color
        font-size: 12px
      a
        font-weight: 500
        .link__inner::after
          color: $focus-color
</style>
