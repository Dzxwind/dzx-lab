<template>
  <div class="frame" id="frame">
    <button @click="renderBar">生成柱状图</button>
  </div>
</template>
<script>
import HlBar from './echarts/HlBar';
import HlLine from './echarts/HlLine';
export default {
  data() {
    return {
      testOption:{
        basic:{
          width:'500px',
          height:'500px',
          top:'100px',
          left:'200px'
        },
        data:[50,60,40,20,87,14,65],
        option:{
          top:"10%",
          bottom:"10%",
          left:"15%",
          right:'5%'
        }
      },
      testBar:{}
    }
  },
  methods: {
    renderBar() {
      this.testBar = new HlLine(this.testOption);
    }
  },
  mounted() {

  },
}
</script>
<style lang="scss" scoped>
.frame {
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
  position: relative;
}
</style>