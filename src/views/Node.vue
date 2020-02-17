<template>
  <div class="node">
    值：{{countAll}}
    <span>test</span>
    <div class="request-list">
      <div class="request-list_i" v-for="(value,key) in requestObj" :key="key">{{key}}：{{value}}</div>
    </div>
  </div>  
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      sum: 0,
      sumArr: [
        {
          name:'test',
          value:21
        },
        {
          name:'test2',
          value:8
        },
        {
          name:'test3',
          value:10
        },
        {
          name:'test4',
          value:15
        },
      ],
      requestObj:null
    }
  },
  mounted(){
    // axios.get('http://localhost:3000/getAllData').then(res => {
    //   console.log(res.data);
    // })
    axios.get(`http://localhost:3000/test?face=😄`).then(res => {
      this.requestObj = res.data;
      console.log(JSON.stringify(this.requestObj));
      
    })
  },
  computed: {
    countAll() {
      return this.sumArr.reduce((res,cur) => {
        res += cur.value;
        return res;
      },0)
    }
  },
}
</script>
<style lang="scss" scoped>

</style>
