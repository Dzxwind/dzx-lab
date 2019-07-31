<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1,
      required: true
    }
  },
  data() {
    return {
      testData: "测试",
      num:2
    }
  },
  methods:{
    testMethods() {
      console.log(this);
    },
    input(e) {
      this.num = e.target.value;
    }
  },
  render(h) {
    return (
      <div>
        <input type="email" placeholder={this.testData} onClick={this.testMethods} value={this.num} onInput={this.input} />
        <p>{this.num}</p>  
      </div>
    );
  },
  // render(createElement) {
  //   return createElement('div', 
  //   { 
  //     attrs: { 
  //       class: "divClass"
  //     }
  //   }, [createElement("i", "test"), createElement("h3", "gagaga")])
  // },
}
</script>
<style lang="scss" scoped>
</style>
