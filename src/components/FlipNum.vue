<template>
  <div class="flip-num">
    <div class="flip-block" v-if="block">
      <div class="flip-block_i" v-for="(item,index) in blockArr" :key="index">{{item}}</div>
    </div>
    <div class="flip-unblock" v-else>{{simpleZero ? showValue : blockValue}}</div>
  </div>
</template>
<script>
import {TweenMax} from "gsap"
export default {
  props:{
    // 起始动画的数字
    start:{
      type:[Number,String],
      validator(value) {
        return !isNaN(Number(value));
      },
      default:0,
    },
    // 终止动画的数字
    end:{
      type:[Number,String],
      validator(value) {
        return !isNaN(Number(value));
      },
      default:100
    },
    // 动画持续时长
    duration:{
      type:[Number,String],
      validator(value) {
        return !isNaN(Number(value)) && value > 0;
      },
      default:1
    },
    // 保留几位小数
    fix:{
      type:[Number,String],
      default:2
    },
    // 重复动画延迟
    delay:{
      type:[Number,String],
      default:2
    },
    // 是否重复播放动画
    repeat:{
      type:Boolean,
      default:true
    },
    // 是否开启简单数据模式（整数部分是否补零）
    simpleZero:{
      type:Boolean,
      default:false
    },
    // 是否为单块翻牌器样式（具体样式在css中修改）
    block:{
      type:Boolean,
      default:false
    }
  },
  computed:{
    // 小数点后补零,前面不补零
    showValue() {
      let fixCombo = Math.pow(10,this.fix);
      let fixNumber = String(Math.round(this.flipValue * fixCombo) / fixCombo);
      let splitNumber = String(fixNumber).split('.');
      if (splitNumber.length >= 2) {
        return fixNumber.padEnd(splitNumber[0].length + this.fix + 1,'0');
      } else {
        return fixNumber + '.' + '0'.repeat(this.fix);
      }
    },
    // 小数点后补零,前面也补零
    blockValue() {
      let endNumber = String(this.end).split('.');
      let showNumber = this.showValue.split('.');
      showNumber[0] = showNumber[0].padStart(endNumber[0].length,'0')
      let blockValue = showNumber.join('.');
      return blockValue;
    },
    blockArr() {
      return this.blockValue.split('');
    }
  },
  data(vm) {
    return {
      flipValue:vm.start,
      flipAnimate:null
    }
  },
  mounted() {
    this.initAnimate();
  },
  methods: {
    initAnimate() {
      this.flipAnimate = TweenMax.to(this.$data,this.duration,{
        flipValue:this.end,
        repeatDelay:this.delay,
        repeat:this.repeat ? -1 : 0,
        ease: Power2.easeInOut
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.flip-num {
  font-family: 'LED';
  font-size: 40px;
  line-height: 1;
  color: #3498db;
  text-align: right;
  .flip-block {
    display: flex;
    font-size: 40px;
    &_i {
      width: .7em;
      text-align: center;
      line-height: 1;
      background-image: linear-gradient(#33c1ec,#24a0ea 50%,#1f8bce 50%,#126dcc);
      color: #fff;
      margin:0 .05em;
    }
  }
}
</style>