import echarts from "echarts";
import 'echarts-gl';
import "echarts-wordcloud";
import echartsOption from "./echartsOption"
echarts.registerTheme("default",echartsOption);
import axios from "../axios/axios"
axios.get("./geo/world.json").then(res => {
  echarts.registerMap('world',res.data)
})
axios.get("./geo/china.json").then(res => {
  echarts.registerMap('china',res.data)
})
axios.get("./geo/yunnan.json").then(res => {
  echarts.registerMap('yunnan',res.data)
})
axios.get("./geo/lijiangshi.json").then(res => {
  echarts.registerMap('lijiangshi',res.data)
})
export default echarts;