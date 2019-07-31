<template>
  <div class="jsx">
    <son-com v-bind="sendMsg">
      <i>1112</i>
    </son-com>
  </div>
</template>
<script>
import SonCom from "./SonCom"
export default {
  components:{
    SonCom
  },
  data() {
    return {
      sendMsg:{
        level:1,
        test:"ga"
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
