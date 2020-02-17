<template>
  <div class="map-box">
    <div class="map-container" id="mapbox"></div>
  </div>
</template>
<script>
import Mapboxgl from 'mapbox-gl'
Mapboxgl.accessToken = 'pk.eyJ1IjoiZHp4d2luZCIsImEiOiJjamp2NWE0Mm0xZHZ3M3FtaG9hMnVtemRjIn0.StSHDBIPo3am8o1x9rgk9Q'
export default {
  data() {
    return {
      map:{}
    }
  },
  mounted() {
    this.mapInit();
  },
  methods: {
    mapInit() {
      this.map = new Mapboxgl.Map({
        container:'mapbox',
        style:'mapbox://styles/mapbox/streets-v9',
        center:[120.219534,30.212893],
        zoom:17,
        pitch:0,
        bearing:0,
        localIdeographFontFamily:"微软雅黑"
      })
      window.addEventListener('resize',() => {
        this.map.resize();
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.map-box {
  width: 100%;
  height: 100%;
  .map-container {
    width: 100%;
    height: 100%;
  }
}
</style>