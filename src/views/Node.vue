<template>
  <div class="node">
    
  </div>  
</template>
<script>
import axios from "axios"
export default {
  mounted(){
    axios.post("http://172.16.70.44:3000/page/save",{a:123,b:[1,{c:"aaa"}]}).then(res => {
      console.log(res.data);
      
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
