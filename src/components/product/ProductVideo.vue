<template>
  <div class="plyr__video-embed" ref="player">
    <iframe
      :src="`https://www.youtube.com/embed/${id}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`"
      allowfullscreen
      allowtransparency
      playsinline
      allow="autoplay"
    ></iframe>
  </div>
</template>

<script>
import Plyr from 'plyr'

export default {
  name: 'ProductVideo',
  data: () => ({
    player: null
  }),
  mounted() {
    this.player = new Plyr(this.$refs.player)
  },
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/sass/plyr/plyr'
</style>
