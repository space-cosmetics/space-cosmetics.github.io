export default {
  created() {
    this.audio = new Audio(require('@/assets/audio/click.mp3')) || null
    if (this.audio !== null) this.audio.volume = 0.3
  },
  data: () => ({
    audio: null
  }),
  methods: {

    play() {
      if (this.audio === null) return

      const playPromise = this.audio.play()

      if (playPromise !== undefined) {
        playPromise.then(_ => { // eslint-disable-line
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(error => { // eslint-disable-line
          // Auto-play was prevented
          // Show paused UI.
        })
      }
    },

    stop() {
      if (this.audio === null) return

      this.audio.pause()
      this.audio.currentTime = 0
    }
  }
}
