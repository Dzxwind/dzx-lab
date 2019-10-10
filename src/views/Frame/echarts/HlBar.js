import HlEcharts from "./HlEcharts";

export default class extends HlEcharts {
  _type = 'bar';
  constructor({basic,data,option}) {
    super({basic,data});
    this.option = option;
    this.initOption();
    super.renderItem();
  }
  initOption() {
    this.echartsOption = (() => ({
      color:['#e74c3c','#e67e22','#f1c40f','#1abc9c','#2ecc71','#3498db','#9b59b6'],
      xAxis:[
        {
          type:'category',
          data:['周日','周一','周二','周三','周四','周五','周六',]
        }
      ],
      yAxis:[
        {
          type:'value'
        }
      ],
      grid:{
        top:this.option.top,
        bottom:this.option.bottom,
        left:this.option.left,
        right:this.option.right
      }
    }))();
    Object.assign(this.echartsOption,{
      series:{
        type:'bar',
        data:this.data
      }
    });
  }
}