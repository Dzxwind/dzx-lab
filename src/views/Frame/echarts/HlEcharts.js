import echarts from 'echarts'
export default class {
  constructor({basic,data}) {
    this.init(basic);
    this.data = data;
  }
  init(basic) {
    this.dom = document.createElement('div');
    this.dom.setAttribute('class','wrapper-item');
    this.dom.style.position = 'absolute';
    this.dom.style.width = basic.width;
    this.dom.style.height = basic.height;
    this.dom.style.left = basic.left;
    this.dom.style.top = basic.top;
    this.instance = echarts.init(this.dom,this.echartsOption);
  }
  renderItem() {
    this.instance.setOption(this.echartsOption);
    document.getElementById('frame').appendChild(this.dom);
  }
}