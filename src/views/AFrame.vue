<template>
  <div class="a-frame">
    <a-scene>
      <!-- <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box> -->
      <!-- <a-box position="0.4 0.5 -3" rotation="0 45 0" color="#f50345"></a-box> -->
      <!-- <a-box position="-0.3 0.5 -2.3" rotation="0 45 0" color="#12f621"></a-box> -->
      <!-- <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box> -->
      <!-- <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere> -->
      <!-- <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder> -->
      <!-- <a-plane position="0 0 -3" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane> -->
      <a-text value="SB" width="6" position="0.5 2 -2.5" rotation="0 0 0"></a-text>
      <a-sky :src="require('@/assets/test.jpg')"></a-sky>
    </a-scene>
  </div>  
</template>
<script>
import aframe from "aframe"
export default {
  data() {
    return {

    }
  },
  methods:{
    
  },
  mounted() {
    
  }
}
</script>
<style lang="scss" scoped>
.a-frame {
  width: 100%;
  height: 100%;
}
</style>
