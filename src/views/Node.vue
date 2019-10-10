<template>
  <div class="node">
    
  </div>  
</template>
<script>
import axios from "axios"
export default {
  mounted(){
    // axios.get('http://172.16.70.44:3000/getAllData').then(res => {
    //   console.log(res.data);
    // })
    axios.get(`http://172.16.70.44:3000/users`).then(res => {
      console.log(res.data);
      
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
