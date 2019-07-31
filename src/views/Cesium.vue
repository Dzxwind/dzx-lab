<template>
  <div class="cesium">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
export default {
  data(vm) {
    return {
      viewer: {},
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjY2FjOTQ4Mi0yNmRhLTRjM2ItOGJjNy1lMWNkM2U4OTM2N2MiLCJpZCI6NTUyNCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0MzQ4MjE1M30.UocXSAyajGZA-DONVLoRaVE8U6xd4SZ_KchOhlhYm3Q",
      layerAddress: "https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
      homeCameraView: {}
    }
  },
  methods: {
    cesiumInit() {
      // Cesium Ion的token
      Cesium.Ion.defaultAccessToken = this.token;
      this.viewer = new Cesium.Viewer('cesiumContainer', {
        scene3DOnly: true,
        selectionIndicator: false,
        baseLayerPicker: false,
        shouldAnimate: true,
        // 蓝黑色底图图层
        // imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
        //   url: this.layerAddress,
        //   tilingScheme: new Cesium.WebMercatorTilingScheme()
        // }),

        // 谷歌地图图层
        imageryProvider: new Cesium.UrlTemplateImageryProvider({
          url: 'http://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}',
          tilingScheme: new Cesium.WebMercatorTilingScheme()
        }),
        // 通过Cesium Ion获取地形数据
        terrainProvider: Cesium.createWorldTerrain({
          requestWaterMask: true,
          requestVertexNormals: true
        })
      });
      // 地形之下的所有entities都不显示
      this.viewer.scene.globe.depthTestAgainstTerrain = true;
      // 设置摄像机初始位置
      this.homeCameraView = {
        destination: Cesium.Cartesian3.fromDegrees(120.216372, 30.25277, 10000),
        orientation: {
          heading: 0,
          pitch: Cesium.Math.toRadians(-40),
          roll: 0,
        }
      }
      this.viewer.camera.setView(this.homeCameraView)

    },
    timeInit() {
      // 设置时钟和时间线
      this.viewer.clock.startTime = Cesium.JulianDate.fromIso8601("2017-07-11T16:00:00Z");
      this.viewer.clock.stopTime = Cesium.JulianDate.fromIso8601("2017-07-11T16:20:00Z");
      this.viewer.clock.currentTime = Cesium.JulianDate.fromIso8601("2017-07-11T16:00:00Z");
      this.viewer.clock.multiplier = 200; // 设置加速倍率
      this.viewer.clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER; // tick computation mode(还没理解具体含义)
      this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; // 循环播放
      this.viewer.timeline.zoomTo(this.viewer.clock.startTime, this.viewer.clock.stopTime); // 设置时间的可见范围
    },
    polygonInit() {
      let polygon = this.viewer.entities.add({
        name: "古拉基尔蓝图",
        polygon: {
          hierarchy: Cesium.Cartesian3.fromDegreesArray([
            -109.080842, 45.002073,
            -105.91517, 45.002073,
            -104.058488, 44.996596,
            -104.053011, 43.002989,
            -104.053011, 41.003906,
            -105.728954, 40.998429,
            -107.919731, 41.003906,
            -109.04798, 40.998429,
            -111.047063, 40.998429,
            -111.047063, 42.000709,
            -111.047063, 44.476286,
            -111.05254, 45.002073]),
          height: 0,
          extrudedHeight:20000,
          material: Cesium.Color.RED.withAlpha(0.5),
          outline: true,
          outlineColor: Cesium.Color.BLACK
        }
      })
      this.viewer.zoomTo(polygon)
    }
  },
  mounted() {
    this.cesiumInit();
    // this.polygonInit();
  }
}
</script>

<style lang="scss" scoped>
.cesium {
  width: 100%;
  height: 100%;
}
</style>
