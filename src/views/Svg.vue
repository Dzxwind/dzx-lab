<template>
  <div class="svg">
    <h1>1.基本</h1>
    <svg x="0px" y="0px" width="300px" height="100px" viewbox="0 0 300 100">
      <rect x="10" y="5" fill="white" stroke="black" width="90" height="90"></rect>
      <circle cx="170" cy="50" r="45" fill="white" stroke="black"></circle>
      <line fill="none" stroke="black" x1="230" y1="6" x2="260" y2="95"></line>
    </svg>
    <svg width="200px" height="100px" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="50" rx="100" ry="50" />
    </svg>
    <svg width="400" height="300" viewBox="0 0 20 20" style="border:1px solid blue;">
      <circle cx="10" cy="10" r="10" fill="blue"></circle>
    </svg>
    <svg width="580" height="400" viewBox="0 0 580 400" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path id="svg_5"
          d="m148.60774,139.10039c28.24222,-69.1061 138.89615,0 0,88.8507c-138.89615,-88.8507 -28.24222,-157.9568 0,-88.8507z"
          fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="none" />
        <path id="svg_6"
          d="m265.00089,146.09396l19.88082,-21.09307l21.11909,22.40665l21.11909,-22.40665l19.88101,21.09307l-21.11909,22.40684l21.11909,22.40684l-19.88101,21.09326l-21.11909,-22.40684l-21.11909,22.40684l-19.88082,-21.09326l21.11891,-22.40684l-21.11891,-22.40684z"
          fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="none" />
      </g>
    </svg>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px" viewBox="0 0 300 200" xml:space="preserve">
      <path class="st0" fill="red" stroke="#000" d="M181.5,111l-32,18l-31.6-18.7l0.4-36.7l32-18l31.6,18.7L181.5,111z M181.7,111.4l0.3-0.1
        l0.4-37.3l-32.1-19l-32.5,18.3l-0.4,37.3l32.1,19L181.7,111.4z M118.8,73.9l31.5-17.8l31.1,18.4l-0.4,36.1l-31.5,17.8l-31.1-18.4
        L118.8,73.9z" />
    </svg>
    <h1>2.描边动画</h1>
    <svg x="0px" y="0px" width="300px" height="100px" viewBox="0 0 300 100" class="svg1">
      <line x1="20" y1="50" x2="200" y2="50" stroke="#000" stroke-width="1"></line>
    </svg>
    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
      <path ref="checkMark" class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>
    <h1>3.蒙版动画</h1>
    <h2>裁剪</h2>
    <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="cut-off-bottom">
          <rect x="0" y="0" width="200" height="100" />
        </clipPath>
      </defs>
      <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
    </svg>
    <h2>蒙版</h2>
    <!-- 白色表示被填充，黑色表示不填充。其他颜色根据颜色的亮度来决定 -->
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="Gradient">
          <stop offset="0" stop-color="white" stop-opacity="0" />
          <stop offset="1" stop-color="white" stop-opacity="1" />
        </linearGradient>
        <mask id="Mask">
          <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)"  />
        </mask>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="green" />
      <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
    </svg>
    <h2>裁剪实战</h2>
    <svg class="path-ani" height='85px' width="1920px">
      <title>Animated clip-path SVG</title>
      <defs>
        <clipPath id="cd-image-1">
          <circle id="cd-circle-1" cx="960" cy="47" r="20"/>
        </clipPath>
      </defs>
      <image height='85px' width="1920px" clip-path="url(#cd-image-1)" :xlink:href="require('@/assets/title.png')"></image>
    </svg>
    <h2>蒙版实战</h2>
    <svg class="mask-ani" height='217px' width="605px">
      <title>Animated clip-path SVG</title>
      <defs>
        <mask id="my-mask">
          <g class="mask-group">
            <path class="st2" d="M0.500,18.500 L36.500,5.500 L36.500,195.500 "></path>
            <path class="st2" d="M183.500,3.500 C183.500,3.500 235.618,-6.192 236.500,98.500 C237.577,226.319 131.500,236.738 131.500,96.500 C131.500,20.270 155.135,3.500 183.500,3.500 Z "></path>
            <path class="st2" d="M310.500,42.500 C310.500,42.500 305.648,4.845 352.500,3.500 C430.491,1.260 380.500,86.500 380.500,86.500 C380.500,86.500 315.251,159.566 316.500,192.500 L407.500,192.500  "></path>
            <path class="st2" d="M582.500,141.500 L471.500,141.500 L556.500,0.500 L556.500,195.500 "></path>
          </g>
        </mask>
      </defs>
      <image mask="url(#my-mask)" height='217px' width="605px" :xlink:href="require('@/assets/amazing.png')"></image>
    </svg>
    <h2>渐变文字</h2>
    <svg class="gra-text" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 300" version="1.1">
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse" class="gra-option" :gradientTransform="gradientRange" x2="800" y2="300">
          <stop offset="0" stop-color="#FFFFFF" stop-opacity="0"/>
          <stop offset="1" stop-color="#FFFFFF" stop-opacity="1"/>
        </linearGradient>
        <mask id="mask" maskUnits="userSpaceOnUse">
          <rect width="800" height="300" fill="url(#gradient)"/>
        </mask>
        <text id="txt" x="400" y="150" font-family="Arial Black" font-size="60" text-anchor="middle">我！就是力量的化身！</text>
      </defs>
      <use xlink:href="#txt" fill="#e70c00" mask="url(#mask)"/>
    </svg>
    <svg class="shin-box" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 611 477">
      <defs>
        <mask id="shin-mask">
          <rect class="rotate-mask" width="388" height="4" x="305" y="236" fill="white"  />
        </mask>
      </defs>
      <rect mask="url(#shin-mask)" width="590px" height="450px" x="10px" y="20px" stroke="#4583d0" fill="#000" stroke-width="20px"  />
      <image height='477' width="611" :xlink:href="require('@/assets/shin.png')"></image>
    </svg>
    <h2>SMIL动画</h2>
    <svg width="500px" height="500px" viewBox="0 0 500 500"> 
      <rect x="0" y="0" width="100" height="100" fill="#feac5e">
        <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite"></animate>
        <animate attributeName="width" to="500" dur="2s" repeatCount="indefinite" />
        <animate attributeName="fill" to="black" dur="2s" repeatCount="indefinite" />
      </rect>
    </svg>
    <svg width="500px" height="500px" viewBox="0 0 500 500">
      <rect x="250" y="250" width="50" height="50" fill="#4bc0c8">
        <animateTransform attributeName="transform" type="rotate" begin="0s" dur="10s" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
      </rect>
    </svg>
  </div>
</template>
<script>
import {TweenMax,TimelineMax} from "gsap"
export default {
  data() {
    return {
      graDegree:0,
      rotateAni:null
    }
  },
  methods: {
    getPathLength() {
      // 获取指定Path的长度
      const length = this.$refs.checkMark.getTotalLength();
      console.log(length);
    },
    startRotate() {
      this.rotateAni = TweenMax.to(this.$data,5,{
        graDegree:360,
        repeat:-1,
      })
    }
  },
  mounted() {
    this.getPathLength();
    this.startRotate();
  },
  computed:{
    gradientRange() {
      return `rotate(${this.graDegree})`
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes loading {
  0% {
    stroke-dashoffset: 300;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -300;
  }
}
@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}
@keyframes maskRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.svg {
  .svg1 {
    line {
      stroke-dasharray: 300, 300;
      stroke-dashoffset: 300;
      animation: loading 8s infinite;
    }
  }
  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke: #7ac142;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }
  .checkmark {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    margin: 10% auto;
    box-shadow: inset 0px 0px 0px #7ac142;
    animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
  }
  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 34;
    stroke-dashoffset: 34;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }
  .path-ani {
    @keyframes visible-clippath {
      to {
        r:1364;
      }
    }
    #cd-image-1 circle { 
      animation: visible-clippath 1s linear forwards infinite; 
    }
  }
  .mask-ani {
    .st2 {
      stroke:#fff;
      fill: none;
      stroke-width: 40;
      stroke-dasharray: 1200px;
		  stroke-dashoffset: 1200px;
      animation: stroke 3s linear forwards;
    }
    .mask-group {
      .st2:nth-child(1) {
        animation-delay: 0s;
      }
      .st2:nth-child(2) {
        animation-delay: 3s;
      }
      .st2:nth-child(3) {
        animation-delay: 6s;
      }
      .st2:nth-child(4) {
        animation-delay: 9s;
      }
    }
  }
  .shin-box {
    width: 611px;
    height: 477px;
    .rotate-mask {
      transform-origin: 50% 50%;
      animation: maskRotate 10s linear infinite;
    }
  }
}
</style>