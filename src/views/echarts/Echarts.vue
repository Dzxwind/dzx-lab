<template>
  <div class="echarts">
    <div id="yibinMap"></div>
    <slot></slot>
  </div>
</template>
<script>
import echarts from 'echarts';
const path = require('path')
const files = require.context('./geojson', false, /\.json$/)
const modules = files.keys().map(key => {
  const name = path.basename(key, '.json')
  const file = files(key).default || files(key);
  echarts.registerMap(name,file);
  return {
    name:file.features[0].properties.name,
    map:name,
    value:file.features[0].properties.centroid
  }
})
import mapOption from './mapOption'
export default {
  data() {
    return {
      yibinMap:null,
      mapOption,
      mapDict:modules,
      mapStatus:false,
      currentMap:"yibinshi"
    }
  },
  mounted() {
    this.echartsInit();
    this.getYibinMapData();
  },
  methods: {
    echartsInit() {
      this.yibinMap = echarts.init(document.getElementById('yibinMap'));
      this.yibinMap.on('click',(params) => {
        this.mapStatus = !this.mapStatus;
        if (this.mapStatus) {
          let subMapName = this.mapDict.find(item => item.name == params.name).map;
          this.currentMap = subMapName;
          this.mapOption.series[1].data = this.mapDict.filter(item => item.name == params.name);
        } else {
          this.currentMap = "yibinshi";
          this.mapOption.series[1].data = this.mapDict;
        }
        this.mapOption.geo.map = this.currentMap;
        this.mapOption.series[0].map = this.currentMap;
        this.yibinMap.setOption(this.mapOption);
        this.$emit('mapChange',this.screenPosition());
      })
    },
    getYibinMapData() {
      this.mapOption.series[1].data = this.mapDict;
      this.yibinMap.setOption(this.mapOption);
      this.$emit('mapChange',this.screenPosition());
    },
    screenPosition() {
      let labelBoard = this.yibinMap.getOption().series[1].data.map(item => ({
        name:item.name,
        map:item.map,
        value:item.value,
        screenPosition:this.yibinMap.convertToPixel('geo',item.value)
      }))
      console.log(labelBoard);
      return labelBoard;
    }
  },
}
</script>
<style lang="scss" scoped>
.echarts {
  width: 980px;
  height: 600px;
  position: relative;
  #yibinMap {
    width: 100%;
    height: 100%;
  }
}
</style>