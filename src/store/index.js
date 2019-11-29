import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    products
  }
})
