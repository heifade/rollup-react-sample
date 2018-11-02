export class Chart2 extends React.PureComponent {
  componentDidMount() {
    var myChart = echarts.init(this.div);

    var option = {
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      dataset: {
        dimensions: ["product", "2015", "2016", "2017"],
        source: [
          ["衬衫", 20, 30, 40],
          ["羊毛衫", 30, 40, 50],
          ["雪纺衫", 40, 50, 60],
          ["裤子", 50, 60, 70],
          ["高跟鞋", 60, 70, 80],
          ["袜子", 70, 80, 90]
        ]
      },
      xAxis: {
        type: "category"
      },
      yAxis: {},
      series: [
        {
          seriesLayoutBy: 'row',
          type: "bar"
        },
        {
          type: "bar"
        },
        {
          type: "bar"
        }
      ]
    };

    myChart.setOption(option);
  }

  render() {
    return <div ref={obj => (this.div = obj)} className="chart" />;
  }
}
