import * as PIXI from 'pixi.js'

/**
 * NOT FOR PRODUCTION
 */

export default class LiquidDistortion {
  constructor(el) {
    this.el = el
  }

  init() {
    this.createApp()
    this.initPixi()
    this.loadImage()
  }

  createApp() {
    this.app = new PIXI.autoDetectRenderer({
      width: this.container.offsetWidth,
      height: this.container.offsetHeight,
    })

    this.app.view.style.position = 'absolute'
    this.app.view.style.top = '0px'
    this.app.view.style.left = '0px'

    this.stage = new PIXI.Container()
    this.ticker = PIXI.Ticker.shared
  }

  initPixi() {
    this.app.parentNode.appendChild(this.app.view)
  }

  loadImage() {
    this.loader = new PIXI.Loader()
    this.loader.add('image', this.el.getAttribute('data-liquid'))
    this.loader.add('pattern', 'https://raw.githubusercontent.com/Pierrinho/elephant/master/pattern-clouds.jpg')
    this.loader.load((loader, resources) => {
      const sprite = new PIXI.Sprite(resources.image.texture)
      const pattern = new PIXI.Sprite(resources.pattern.texture)

      this.stage.addChild(sprite)
      this.stage.addChild(pattern)

      pattern.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

      const filter = new PIXI.filters.DisplacementFilter(pattern)
      this.stage.filters = [ filter ]

      pattern.scale.x = 2
      pattern.scale.y = 2

      sprite.anchor.set(0.5)
      sprite.x = this.app.width / 2
      sprite.y = this.app.height / 2

      this.ticker.add(() => {
        window.console.log('asd')
        pattern.x += 1
        pattern.y += 1
        this.app.render(this.stage)
      })
    })
  }
}