export default {
  inserted: el => {
    const src = el.getAttribute('data-lazy-src')

    if(!src) return

    const image = new Image()

    image.onload = () => {
      el.src = image.src
    }

    image.onerror = () => {

    }

    image.src = src
  }
}
