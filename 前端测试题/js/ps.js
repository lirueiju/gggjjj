// 柱状图
// 基于准备好的dom，初始化echarts实例
var histogram = echarts.init(document.getElementById('rg_list'));
// 指定图表的配置项和数据
option = {
  title: {
    text:'柱状图数据展示',
    left:'center',
    top:50
  },
  grid:{
    top:110,
    bottom:30,
  },
  xAxis: {
    data: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT','SUN'],
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
  },
  yAxis: {
    name:'商品数'
  },
  series: [
    {
      type: 'bar',
      data: [9, 11, 13, 10, 8, 11,5],
      barWidth:15,
    }
  ]
};
// 使用刚指定的配置项和数据显示图表。
histogram.setOption(option);
// 饼图
var pie = echarts.init(document.getElementById('lf_list'));
option = {
  title:{
    text:'饼状图数据展示',
    left:'center',
    top:47,
  },
  series: [
    {
      bottom:-60,
      radius:'60%',
      type: 'pie',
      data: [
        {
          value: 6,
          name: 'MON',
          // 饼颜色
          itemStyle: {
            color: "#bf3736",
          },
          // 提示文字颜色
          label: {
            color: "#bf3736",
          },
        },
        {
          value: 6,
          name: 'TUE',
          itemStyle: {
            color: "#2f4553",
          },
          label: {
            color: "#2f4553",
          },
        },
        {
          value: 3,
          name: 'WED',
          itemStyle: {
            color: "#63a0a8",
          },
          label: {
            color: "#63a0a8",
          },
        },
        {
          value: 2,
          name: 'THU',
          itemStyle: {
            color: "#d38268",
          },
          label: {
            color: "#d38268",
          },
        },
        {
          value: 30,
          name: 'FRI',
          itemStyle: {
            color: "#92c6ae",
          },
          label: {
            color: "#92c6ae",
          },
        },
        {
          value: 18,
          name: 'SAT',
          itemStyle: {
            color: "#769e84",
          },
          label: {
            color: "#769e84",
          },
        },
        {
          value: 20,
          name: 'SUN',
          itemStyle: {
            color: "#c8842e",
          },
          label: {
            color: "#c8842e",
          },
        },
      ]
    }
  ]
};
pie.setOption(option);
// 折线图
var curve = echarts.init(document.getElementsByClassName('md_display')[0]);
option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['01/26', '01/28', '01/30', '02/01', '02/03', '02/05', '02/07', '02/09', '02/11', '02/13', '02/15', '02/17', '02/19', '02/21', '02/23'],
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    boundaryGap: true,
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [8972, 6448, 7456, 5824, 8123, 300, 300,5319,7463,1435,9426,8187,8297,443,9135],
      type: 'line',
      smooth:'x',
      areaStyle: {
        opacity:0.3,
      },
    }
  ]
};
curve.setOption(option);