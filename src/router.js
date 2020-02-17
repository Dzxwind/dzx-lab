import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/css',
      name: 'css',
      component: () => import('./views/Css.vue')
    },
    {
      path: '/node',
      name: 'node',
      component: () => import('./views/Node.vue')
    },
    {
      path: '/jsx',
      name: 'jsx',
      component: () => import('./views/jsx/Jsx.vue')
    },
    {
      path: '/cesium',
      name: 'cesium',
      component: () => import('./views/Cesium.vue')
    },
    {
      path: '/amap',
      name: 'amap',
      component: () => import('./views/AMap.vue')
    },
    {
      path: '/aframe',
      name: 'aframe',
      component: () => import('./views/AFrame.vue')
    },
    {
      path: '/gsap',
      name: 'gsap',
      component: () => import('./views/Gsap.vue')
    },
    {
      path: '/frame',
      name: 'frame',
      component: () => import('./views/Frame/Frame.vue')
    },
    {
      path: '/svg',
      name: 'svg',
      component: () => import('./views/Svg.vue')
    },
    {
      path: '/mapbox',
      name: 'mapbox',
      component: () => import('./views/MapBox.vue')
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: () => import('./views/echarts/Echarts.vue')
    },
    {
      path: '/d3',
      name: 'd3',
      component: () => import('./views/d3/d3.vue')
    },
  ]
})

export default router;