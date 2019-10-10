<template>
  <div class="gsap">
    <div class="num-animate">
      {{num|fixNum}}
    </div>
    <div class="trans-ball">
      <div class="ball" id="transBall" ref="transBall" @click="transBallControl"></div>
    </div>
    <div class="fade-logo">
      <div class="fade-logo_i" :id="item.name" v-for="item in fadeLogoList" :key="item.color" :style="{backgroundColor:item.color}"></div>
    </div>
    <div class="scale-point">
      <div class="scale-point_i" :id="item.name" v-for="item in scalePointList" :key="item.name"></div>
    </div>
    <div class="canva-wrapper">
      <canvas width="600" height="500" ref="gsapCanvas"></canvas>
    </div>
    <div class="transition-tag">
      <transition :css="false" @enter="tagEnter" @leave="tagLeave">
        <div class="tag-block" v-if="isTagShow"></div>
      </transition>
      <button @click="startDEJAVU">Start</button>
    </div>
  </div>
</template>
<script>
import {TweenMax,TimelineMax} from "gsap"

export default {
  data() {
    return {
      isTagShow:false,
      tagEnterAni:{},
      tagLeaveAni:{},
      num:0,
      transBallAni:{},
      fadeLogoList:[
        {
          name:"fadeRed",
          color:"#e74c3c",
          type:"x",
          distance:"-=60px"
        },
        {
          name:"fadeAowoyi",
          color:"#1abc9c",
          type:"x",
          distance:"+=60px"
        },
        {
          name:"fadeBlue",
          color:"#3498db",
          type:"y",
          distance:"+=60px"
        },
        {
          name:"fadePurple",
          color:"#9b59b6",
          type:"y",
          distance:"-=60px"
        },
      ],
      scalePointList:[
        {
          name:"scalePoint1"
        },
        {
          name:"scalePoint2"
        },
        {
          name:"scalePoint3"
        },
        {
          name:"scalePoint4"
        },
        {
          name:"scalePoint5"
        },
        {
          name:"scalePoint6"
        },
      ],
      fadeTimeLine:{},
      scalePointLine:{},
      context:{},
      Circle: class {
        constructor(centerX,centerY,radius,color) {
          this.x = centerX;
          this.y = centerY;
          this.radius = radius;
          this.color = color;
        }
      },
      gsapCircle:{}
    }
  },
  methods: {
    flipNum() {
      TweenMax.to(this.$data,5,{
        num:100,
        repeat:-1,
        yoyo:true,
        onUpdate:() => {
          // console.log(this.num);
        }
      })
    },
    transBall() {
      this.transBallAni = TweenMax.to('#transBall',5,{
        x:"+=600",
        repeat:-1,
        repeatDelay:1,
        // yoyo:true,
        ease: Bounce.easeOut
      })
    },
    transBallControl() {
      console.log(this.transBallAni);
      // this.transBallAni.timeScale(3)
    },
    fadeLogo() {
      this.fadeTimeLine = new TimelineMax({
        repeat:-1
      });
      this.fadeLogoList.forEach((item,index) => {
        let delay = index == 0 ? "" : "-=0.7";
        let tween = TweenMax.from(`#${item.name}`, 1, {
          [item.type]:item.distance,
          autoAlpha:0,
        });
        this.fadeTimeLine.add(tween,delay);
      })
    },
    scalePoint() {
      this.scalePointLine = new TimelineMax({
        repeat:-1,
        repeatDelay:1,
      });
      this.scalePointLine.staggerFrom(this.scalePointList.map(item => `#${item.name}`),1,{
        scale:"-=0.5",
        autoAlpha:0
      },0.5)
    },
    gsapAni() {
      this.flipNum();
      this.transBall();
      this.fadeLogo();
      this.scalePoint();
    },
    canvasInit() {
      this.context = this.$refs.gsapCanvas.getContext('2d');
      this.gsapCircle = new this.Circle(200,200,50,"#67C23A");
      TweenMax.from(this.gsapCircle, 1, {
        y:"+=200",
        repeat:-1,
        yoyo:true,
        onUpdate:() => {
          this.drawCircle();
        }
      });
    },
    drawCircle() {
      this.context.clearRect(0,0,1900,1000);
      this.context.fillStyle = this.gsapCircle.color;
      this.context.save();
      this.context.beginPath();
      this.context.arc(this.gsapCircle.x,this.gsapCircle.y,this.gsapCircle.radius,0,2 * Math.PI);
      this.context.fill();
      this.context.restore();
    },
    tagEnter(el,done) {
      this.tagEnterAni = new TimelineMax();
      let translate = TweenMax.from(el,2,{
        x:"-=800",
      })
      let rotate = TweenMax.from(el,1,{
        rotation:"+=90"
      })
      this.tagEnterAni.add(translate).add(rotate,.5);
    },
    tagLeave(el,done) {
      this.tagLeaveAni = TweenMax.to(el,2,{
        y:"-=500",
        autoAlpha:0,
        // onComplete() {
        //   done(); 
        // }
      })
    },
    startDEJAVU() {
      this.isTagShow = true;
      setTimeout(() => {
        this.isTagShow = false;
      }, 1000);
    }
  },
  mounted() {
    this.gsapAni();
    this.canvasInit();
  },
  filters:{
    fixNum(val) {
      return Math.round(val);
    }
  }
}
</script>
<style lang="scss" scoped>
.gsap {
  .ball {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    // background-color: #e67e22;
    background: url("../assets/basketball.png") no-repeat center center;
    background-size: contain;
  }
  .trans-ball {
    display: flex;
    justify-content: center;
    .ball {
      cursor: pointer;
    }
  }
  .fade-logo {
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 80px;
    width: 180px;
    height: 180px;
    &_i {
      position: absolute;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      top: 50%;
      margin-top: -30px;
      &:nth-child(1) {
        transform: translate(-60px,0);
      }
      &:nth-child(2) {
        transform: translate(60px,0);
      }
      &:nth-child(3) {
        transform: translate(0,60px);
      }
      &:nth-child(4) {
        transform: translate(0,-60px);
      }
    }
  }
  .scale-point {
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 80px;
    &_i {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #3498db;
      margin: 0 10px;
    }
  }
  .transition-tag {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    position: relative;
    height: 200px;
    button {
      position: absolute;
      left: 30%;;
    }
    .tag-block {
      width: 200px;
      height: 300px;
      background: url("../assets/car.png") center center no-repeat;
      border-radius: 50%;
    }
  }
}
</style>