import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '@/views/Catalog'
// import About from '@/views/About'
// import Product from '@/views/Product'
// import Dealers from '@/views/Dealers'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior (to, from, savedPosition) { // eslint-disable-line
    // if (savedPosition) {
    //   return  savedPosition;
    // }
    // if (to.hash) {
    //   return {selector: to.hash};
    // }
    // return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'catalog',
      meta: {
        title: 'Catalog | Space Cosmetics'
      },
      component: Catalog
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About | Space Cosmetics'
      },
      // component: About
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/dealers',
      name: 'dealers',
      meta: {
        title: 'Dealers | Space Cosmetics'
      },
      // component: Dealers
      component: () => import(/* webpackChunkName: "dealers" */ '@/views/Dealers.vue')
    },
    {
      path: '/product',
      name: 'product',
      meta: {
        title: 'Product | Space Cosmetics'
      },
      // component: Product
      component: () => import(/* webpackChunkName: "product" */ '@/views/Product.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  document.title = to.meta.title
  next()
})

export default router
