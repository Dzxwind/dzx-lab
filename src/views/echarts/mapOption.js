let option = {
  geo: {
    map: 'yibinshi',
    aspectScale: 1.3,
    left: 'center',
    itemStyle: {
      //地图区域的多边形 图形样式
      silent:true,
      normal: {
        //是图形在默认状态下的样式
        label: {
          show: false, //是否显示标签
          textStyle: {
            color: '#ff0',
          },
        },
        borderWidth:0,
        shadowColor: 'rgba(12, 55, 147,0.5)',
        shadowOffsetY: 15,
      },
      emphasis:{
        shadowColor:'rgba(0, 242, 246,0.3)'
      },
    },
  },
  series:[
    {
      type:'map',
      map:'yibinshi',
      aspectScale: 1.3,
      itemStyle:{
        areaColor: 'rgba(12, 55, 147,0.7)',
        borderWidth: 1,
        borderColor: '#18ebff',
      },
      label:{
        show:false,
        color:"#fff",
        fontSize:14,
        borderColor:'#EFBF00',
        borderWidth:1,
        shadowColor:'#EFBF00',
        shadowBlur:50,
        padding:[8,14]
      },
      emphasis:{
        itemStyle:{
          areaColor:'rgba(0, 242, 246,0.5)'
        },
        label:{
          show:false,
          color:"#fff",
          fontSize:14,
          borderColor:'#EFBF00',
          borderWidth:1,
          shadowColor:'#EFBF00',
          shadowBlur:50,
          padding:[8,14]
        },
      }
    },
    {
      type:'scatter',
      coordinateSystem:'geo',
      data:[],
      symbol:'path://',
      label:{
        show:true,
        fontSize:14,
        color:"#fff",
        fontSize:14,
        borderColor:'#EFBF00',
        borderWidth:1,
        shadowColor:'#EFBF00',
        shadowBlur:50,
        padding:[8,14],
        formatter(params) {
          return params.name;
        }
      }
    }
  ]
};

export default option;
