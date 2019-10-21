<template>
  <div class="svg">
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
    <svg x="0px" y="0px" width="300px" height="100px" viewBox="0 0 300 100" class="svg1">
      <line x1="20" y1="50" x2="200" y2="50" stroke="#000" stroke-width="1"></line>
    </svg>
    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
      <path ref="checkMark" class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    getPathLength() {
      // 获取指定Path的长度
      const length = this.$refs.checkMark.getTotalLength();
      console.log(length);
    }
  },
  mounted() {
    this.getPathLength();
  },
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
}
</style>