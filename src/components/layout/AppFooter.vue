<template>
  <footer class="footer pattern" ref="footer">
    <div class="container">
      <div class="grid">

        <AppBox
          title="Space Cosmetics"
          description="The professional's source for detailing supplies,<br>equipment & accessories"
          :links="[
            { name: '+7(911) 818-80-67',     to: 'tel:+79118188067' },
            { name: 'zakaz@himprofline.ru', to: 'mailto:zakaz@himprofline.ru'}
          ]"
          :classes="['item', 'item-3']"/>

        <AppBox
          title="Newsletter"
          :links="[ ]"
          :classes="['item', 'item-3']"/>

        <AppBox
          title="Follow us"
          description="We're available on the following social<br> media platforms:"
          :horizontal="true"
          :links="[
            { name: 'Vk', to: 'https://vk.com/himprofline' },
            { name: 'Fb', to: 'https://www.facebook.com/Himprofline-324573631705060/' },
            { name: 'Yt', to: 'https://www.youtube.com/channel/UCQxEp4FSSdL9_s6txeAE25w' },
            { name: 'In', to: 'https://www.instagram.com/himprofline/' }
          ]"
          :classes="['item', 'item-3']"/>

      </div>

      <AppCredits/>

    </div>
  </footer>
</template>

<script>
import AppBox from '@/components/common/AppBox'
import AppCredits from '@/components/common/AppCredits'

export default {
  name: 'AppFooter',
  mounted() {
    this.setHeight()

    window.addEventListener('resize', () => {
      this.setHeight()
    })
  },
  methods: {
    setHeight() {
      document.body.style.marginBottom = `${this.$refs.footer.offsetHeight}px`
    }
  },
  components: { AppCredits, AppBox }
}
</script>

<style lang="sass">
.footer
  position: fixed
  right: 0
  bottom: 0
  left: 0
  z-index: -1
  padding: $footer-padding
  background-color: $footer-bg-color

  // background-color: #ffffff
  // background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f2f2f2' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
</style>