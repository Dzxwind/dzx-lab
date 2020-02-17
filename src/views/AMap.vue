<template>
  <div class="container">
    <div id="amapContainer"></div>  
  </div>  
</template>
<script>
const TToken = '8c1b781a99db8a874e662dc5b57300bc';
import cordTrans from 'coordtransform'
export default {
  data() {
    return {
      map:{},
      layer:{},
      building:{},
      markerList:[
        {
          name:"test1",
          position:cordTrans.gcj02towgs84(...[120.215612,30.210663])
          // position:[120.215612,30.210663]
        },
        {
          name:"test2",
          position:cordTrans.gcj02towgs84(...[120.221942,30.205377])
          // position:[120.221942,30.205377]
        },
        {
          name:"滨江区政府",
          position:cordTrans.gcj02towgs84(...[120.212046,30.208429])
          // position:[120.212046,30.208429]
        },
        {
          name:"圆盘交界处",
          position:cordTrans.gcj02towgs84(...[120.214119,30.207636])
          // position:[120.214119,30.207636]
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
        viewMode:'3D',
        center:[120.219534,30.212893],
        crs:'EPSG4326',
        layers:[
          ...this.TLayer
        ],
        buildingAnimation: true,
        expandZoomRange: true,
      })
      this.map.on('click',(e) => {
        console.log(e);
        
      })
    },
    // 天地图底图
    TLayerInit() {
      this.TLayer = [
        new AMap.TileLayer({
          getTileUrl: 'http://t{0,1,2,3,4,5,6,7}.tianditu.gov.cn/DataServer?T=vec_c&x=[x]&y=[y]&l=[z]&tk=' + TToken,
        }),
        new AMap.TileLayer({
          getTileUrl: 'http://t{0,1,2,3,4,5,6,7}.tianditu.gov.cn/DataServer?T=cva_c&x=[x]&y=[y]&l=[z]&tk=' + TToken,
        })
      ]
    },
    layerInit() {
      this.layer = new AMap.TileLayer({
        getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=m@142&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galil',
      });
      // this.layer.setMap(this.map)
    },
    buildingInit() {
      this.building = new AMap.Buildings({
        zooms:[13,18],
        zIndex:10,
        heightFactor:10
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
    this.TLayerInit();
    this.layerInit();
    this.buildingInit();
    this.amapInit();
    this.markerInit();
    this.onMarkerClick();
    console.log(AMap.GeometryUtil.distance([120.08537572188001,30.128106653076934],[120.093621369532,30.123650961536]));
    
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
