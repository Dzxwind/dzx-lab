<template>
  <div class="container">
    <div id="amapContainer"></div>  
  </div>  
</template>
<script>
export default {
  data() {
    return {
      map:{},
      layer:{},
      building:{},
      markerList:[
        {
          name:"test1",
          position:[120.215612,30.210663]
        },
        {
          name:"test2",
          position:[120.221942,30.205377]
        },
        {
          name:"test3",
          position:[120.217248,30.212657]
        },
      ]
    }
  },
  methods:{
    amapInit() {
      this.map = new AMap.Map('amapContainer',{
        zoom:17,
        resizeEnable: true,
        rotateEnable: true,
        pitchEnable: true,
        center:[120.219534,30.212893],
        viewMode:'3D',
        layers:[this.layer,this.building],
        buildingAnimation: true,
        expandZoomRange: true,
        pitch: 80,
      })
    },
    layerInit() {
      this.layer = new AMap.TileLayer({
        getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=y@142&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galil',
      });
      // this.layer.setMap(this.map)
    },
    buildingInit() {
      this.building = new AMap.Buildings({
        zooms:[16,18],
        zIndex:10,
        heightFactor:2
      })
    },
    markerInit() {
      this.map.add(this.markerShowList);
    },
    onMarkerClick() {
      this.markerShowList.forEach((item,index) => {
        item.on('click',(e) => {
          console.log(this.markerList[index].name);
        })
      })
    }
  },
  mounted() {
    this.layerInit();
    this.buildingInit();
    this.amapInit();
    this.markerInit();
    this.onMarkerClick();
  },
  computed:{
    markerShowList() {
      let list = this.markerList.map(item => 
        new AMap.Marker({
          title:item.name,
          position:new AMap.LngLat(...item.position)
        })
      )
      return list;
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  #amapContainer {
    width: 100%;
    height: 100%;
  }
}
</style>
