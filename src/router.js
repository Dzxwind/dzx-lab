import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Css from './views/Css.vue'
import Node from './views/Node.vue'
import Jsx from './views/jsx/Jsx.vue'
import Cesium from './views/Cesium.vue'
import AMap from './views/AMap.vue'
import AFrame from './views/AFrame.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/css',
      name: 'css',
      component: Css
    },
    {
      path: '/node',
      name: 'node',
      component: Node
    },
    {
      path: '/jsx',
      name: 'jsx',
      component: Jsx
    },
    {
      path: '/cesium',
      name: 'cesium',
      component: Cesium
    },
    {
      path: '/amap',
      name: 'amap',
      component: AMap
    },
    {
      path: '/aframe',
      name: 'aframe',
      component: AFrame
    },
  ]
})

export default router;