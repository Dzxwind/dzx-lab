<template>
  <div class="node">
    值：{{countAll}}
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
          value:2
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
      ]
    }
  },
  mounted(){
    // axios.get('http://172.16.70.44:3000/getAllData').then(res => {
    //   console.log(res.data);
    // })
    axios.get(`http://172.16.70.44:3000/users`).then(res => {
      console.log(res.data);
      
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
