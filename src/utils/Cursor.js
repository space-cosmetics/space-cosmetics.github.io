class Cursor {
  constructor(el) {
    this.cursor = el
    this.x = 0
    this.y = 0
    this.nx = 0
    this.ny = 0

    this.raf = this.raf.bind(this)
  }

  init() {
    this.addEventListener()
    this.raf()
  }

  onMouseMove(event) {
    this.nx = event.clientX
    this.ny = event.clientY
  }

  onMouseEnter(event) {
    this.x = this.nx = event.clientX
    this.y = this.ny = event.clientY
    this.cursor.classList.remove('cursor--is-hidden')
  }

  onMouseLeave() {
    this.cursor.classList.add('cursor--is-hidden')
  }

  onMouseUp() {
    this.cursor.classList.remove('cursor--is-pressed')
  }

  onMouseDown() {
    this.cursor.classList.add('cursor--is-pressed')
  }

  // onMouseOver() {

  // }

  // onMouseOut() {

  // }

  raf() {
    this.x = this.lerp(this.x, this.nx, .1)
    this.y = this.lerp(this.y, this.ny, .1)
    this.cursor.style.left = `${this.x}px`
    this.cursor.style.top = `${this.y}px`
    requestAnimationFrame(this.raf)
  }

  addEventListener() {
    document.addEventListener('mousemove', this.onMouseMove.bind(this))
    document.addEventListener('mouseleave', this.onMouseLeave.bind(this))
    document.addEventListener('mouseenter', this.onMouseEnter.bind(this))
    document.addEventListener('mousedown', this.onMouseDown.bind(this))
    document.addEventListener('mouseup', this.onMouseUp.bind(this))
  }

  lerp(v0, v1, t) {
    return (1 - t) * v0 + t * v1
  }
}

export default Cursor
