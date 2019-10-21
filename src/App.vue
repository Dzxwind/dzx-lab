<template>
  <div id="app">
    <div id="nav" v-if="navShow">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/css">css</router-link> |
      <router-link to="/node">node</router-link> |
      <router-link to="/jsx">jsx</router-link> |
      <router-link to="/cesium">cesium</router-link> |
      <router-link to="/amap">amap</router-link> |
      <router-link to="/aframe">aframe</router-link> |
      <router-link to="/gsap">GSAP</router-link> |
      <router-link to="/frame">Frame</router-link> |
      <router-link to="/svg">Svg</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exceptItem:['cesium','amap','aframe','frame']
    }
  },
  computed:{
    currentRoute() {
      return this.$route.name
    },
    navShow() {
      if (this.exceptItem.indexOf(this.currentRoute) != -1) {
        return false;
      } else {
        return true;
      }
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
html,body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
