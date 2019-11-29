export default {
  mounted() {
    const lazyImages = [].slice.call(document.querySelectorAll('.lazy'))

    if ('IntersectionObserver' in window) {
      const lazyImageObserver = new IntersectionObserver((entries, observer) => { // eslint-disable-line
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target
            lazyImage.src = lazyImage.dataset.src
            // lazyImage.srcset = lazyImage.dataset.srcset
            // lazyImage.classList.remove('lazy')
            lazyImageObserver.unobserve(lazyImage)
          }
        })
      })

      lazyImages.forEach(lazyImage => {
        lazyImageObserver.observe(lazyImage)
      })
    } else {
      // Possibly fall back to a more compatible method here
      window.console.log('Observer is not suppoerted')
    }
  }
}
