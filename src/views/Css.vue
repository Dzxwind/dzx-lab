<template>
  <div class="css">
    <div class="moudle1 moudle">
      <div class="tab">TRAPEZOID</div>
    </div>
    <div class="moudle2 moudle">
      <div class="pie"></div>
    </div>
    <div class="moudle3 moudle">
      <dl>
        <dt>Name:</dt>
        <dd>LALAA</dd>
        <dt>Email:</dt>
        <dd>lalal@laal.com</dd>
        <dd>lala22l@laal.com</dd>
        <dt>location:</dt>
        <dd>Mars</dd>
      </dl>
    </div>
    <div class="moudle4 moudle">
      <input type="checkbox" id="awesome">
      <label for="awesome">awesome!</label>
    </div>
    <div class="moudle moudle5 tour-list">
      <transition-group name="list-complete" class="tour-wrapper" tag="div" mode="out-in">
        <div class="tour-list_i" v-for="item in showTourList" :key="item.name">
          <div class="tour-list-img">
            <!-- <img :src="item.img"> -->
          </div>
          <div class="tour-list-name">{{item.name}}</div>
        </div>
      </transition-group>
    </div>
    <div class="moudle moudle6">
      <transition name="scale-left">
        <template>
          <div class="scale1 scaleBox" v-if="scaleFlag" :key="'gaga'">1111111</div>
          <div class="scale2 scaleBox" :key="'haha'" v-else>2222222</div>
        </template>
      </transition>
      <button @click="scaleFlag = !scaleFlag">switch</button>
    </div>
    <div class="moudle moudle7" :class="[style.test.moudle7]">
      <div class="red" :class="[style.test.red]"></div>
      <div :class="[style.test.green]"></div>
      <p class="title">gagaga</p>
    </div>
    <div class="moudle moudle8">
      <div class="heli">
        <img src="../assets/heli.png" alt="">
        <div class="shadow"></div>
      </div>
    </div>
    <div class="moudle moudle9">
      <div class="polygon" :class="{animated:isModle9}" @click="isModle9 = !isModle9"></div>
    </div>
    <div class="moudle moudle10">
      <div class="block"></div>
    </div>
    <div class="hole"></div>
  </div>
</template>
<script>
import test from "@style/test.module.scss"
export default {
  data(){
    return{
        isModle9:false,
       benefitList: [
        "1.取消经营性一级公路收费站",
        "2.驾驶员网络教育免费培训",
        "3.取消船舶设施检验费用",
        "4.厅本级行政审批下放",
        "5.内容内容内容内容内容内容",
        "6.内容内容内容内容内容内容",
        "7.内容内容内容内容内容内容",
        "8.内容内容内容内容内容内容",
      ],
      tourList:[
        {
          name:'白坪——飞龙乡村旅游发展度假村',
          // img:testImg,
          data:[
            {
              name:"已停",
              value:97
            },
            {
              name:"剩余",
              value:103
            },
          ]
        },
        {
          name:'龙女湖旅游区',
          // img:testImg,
          data:[
            {
              name:"已停",
              value:142
            },
            {
              name:"剩余",
              value:121
            },
          ]
        },
        {
          name:'武胜嘉陵旅游区',
          // img:testImg,
          data:[
            {
              name:"已停",
              value:132
            },
            {
              name:"剩余",
              value:154
            },
          ]
        },
        {
          name:'宝箴塞风景区',
          // img:testImg,
          data:[
            {
              name:"已停",
              value:264
            },
            {
              name:"剩余",
              value:54
            },
          ]
        },
      ],
      nextNum: 10,
      scaleFlag:true,
      style:{
        test
      }
    }
  },
  mounted(){
    setTimeout(() => {
      this.benefitList.shift();
    }, 2000);
    console.log(this.style.test)
    
  },
  computed:{
    benefitList_show() {
      return this.benefitList.filter((item,index) => index < 5);
    },
    showTourList() {
      return this.tourList.filter((item,index) => index < 3);
    },
  }
};
</script>
<style lang="scss">
.scale-left-enter-active,
.scale-left-leave-active {
  transition: all 1s;
}

.scale-left-enter,
.scale-left-leave-to {
  transform: scale(0, 1);
}

.scale-left-enter-to,
.scale-left-leave {
  transform: scale(1, 1);
}
.css {
  .moudle {
    margin-bottom: 60px;
  }
  .moudle1 {
    .tab {
      position: relative;
      display: inline-block;
      padding: 0.5em 1em 0.35em;
      color: #fff;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
        background: #58a;
        transform: perspective(0.5em) rotateX(5deg); // perspective表示透视
      }
    }
  }
  .moudle2 {
    @keyframes spin {
      to {
        transform: rotate(0.5turn);
      }
    }
    @keyframes bg {
      50% {
        background-color: #655;
      }
    }
    .pie {
      width: 100px;
      height: 100px;
      background-color: yellowgreen;
      margin: 0 auto;
      border-radius: 50%;
      background-image: linear-gradient(to right, transparent 50%, #655 0);
      &::before {
        content: "";
        display: block;
        margin-left: 50%;
        height: 100%;
        background-color: inherit;
        transform-origin: 0 50%;
        border-radius: 0 100% 100% 0 / 50%;
        animation: spin 3s linear infinite, bg 6s step-end infinite;
      }
    }
  }
  .moudle3 {
    text-align: left;
    dl {
      dt {
        display: inline;
        cursor: not-allowed;
      }
      dd {
        margin: 0;
        display: inline;
        &::after {
          content: "\A";
          white-space: pre;
        }
      }
    }
  }
  .moudle4 {
    input[type="checkbox"] {
      position: absolute;
      clip: rect(0, 0, 0, 0);
      & + label::before {
        content: "\a0";
        display: inline-block;
        vertical-align: 0.15em;
        width: 0.8em;
        height: 0.8em;
        margin-right: 0.2em;
        border-radius: 0.2em;
        background: silver;
        text-indent: 0.15em;
        line-height: 0.65;
      }
      &:checked + label::before {
        content: "\2714";
        background-color: greenyellow;
      }
    }
  }
  .moudle5 {
    .benefit-people {
      display: flex;
    }
    .benefit-people_i {
      transition: all 1s;
    }
    .list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
      opacity: 0;
      transform: translateX(50%);
    }
    .list-complete-leave-active {
      position: absolute;
      left: 0;
    }
    .tour-wrapper {
      display: flex;
      justify-content: space-around;
      box-sizing: border-box;
    }
    .tour-list {
      width: 100%;
      position: absolute;
      top: 0;
      height: 2.58rem;
      background-color: #fff;
      color: #333;
      padding-top: 0.21rem;
      &_i {
        flex: 0 2.2rem;
        transition: all .5s;
        img {
          width: 2.2rem;
          height: 1.6rem;
        }
        .tour-list-name {
          margin-top: 0.1rem;
          font-size: 0.24rem;
          line-height: 1.2;
        }
      }
    }
  }
  .moudle6 {
    .scaleBox {
      width: 200px;
      height: 400px;
      background-color: #58a;
      transform-origin: 0 0;
    }
    .scale1 {
      height: 300px;
    }
  }
  .moudle8 {
    display: flex;
    justify-content: center;
    @keyframes rise {
      0% {
        transform: translateY(-50px);
      }
      50% {
        transform: translateY(-70px);
      }
      100% {
        transform: translateY(-50px);
      }
    }
    @keyframes shadow {
      0% {
        box-shadow: 0 0 20px 15px #333;
      }
      50% {
        box-shadow: 0 0 40px 15px #333;
      }
      100% {
        box-shadow: 0 0 20px 15px #333;
      }
    }
    .heli {
      position: relative;
      transform:rotateX(60deg);
      img {
        display: block;
        top: 0;
        transform:translateY(-50px);
        animation: rise 2s infinite ease-in-out;
      }
      .shadow {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 0px;
        height: 0px;
        border-radius: 50%;
        box-shadow: 0 0 40px 15px #333;
        animation: shadow 2s infinite ease-in-out;
        bottom: 0;
      }
    }
  }
  .moudle9 {
    display: flex;
    justify-content: center;
    .polygon {
      width: 200px;
      height: 80px;
      background-color: #58a;
      transition: all 0.5s;
      transform: perspective(50px) rotateX(10deg);
      &.animated {
        transform: perspective(50px) rotateX(-10deg);
      }
    }
  }
  .moudle10 {
    @keyframes changePath {
      0% {
        clip-path: polygon(0 0,0 0,0 100%,0 100%);
      }
      33% {
        clip-path: polygon(50% 0, 100% 100%,0 100%);
      }
      66% {
        clip-path: ellipse(50% 50%)
      }
      100% {
        clip-path: polygon(0 0,0 0,0 100%,0 100%);
      }
    }
    display: flex;
    justify-content: center;
    height: 300px;
    margin: 20px 0;
    .block {
      width: 300px;
      height: 300px;
      background-color: #58a;
      clip-path: polygon(0 0,0 0,0 100%,0 100%);
      animation: changePath 2s linear infinite alternate;
    }
  }
  .hole {
    width: 160px;
    height: 160px;
    position: relative;
    overflow: hidden;
  }
  .hole:after {
    position: absolute;
    height: 100px;
    width: 100px;
    left: -50px;
    top: -50px;
    content: '';
    border-radius: 50%;
    border: 80px solid #0079AB;
  }
}
</style>