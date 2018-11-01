export class Chart2 extends React.PureComponent {
  componentDidMount() {
    var myChart = echarts.init(this.div);

    var option = {
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      dataset: {
        source: [
          ["产品", "2015", "2016"],
          ["衬衫", 20, 21],
          ["羊毛衫", 30, 31],
          ["雪纺衫", 40, 41],
          ["裤子", 50, 51],
          ["高跟鞋", 60, 61],
          ["袜子", 70, 71]
        ]
      },
      legend: {
        data: ["销量"]
      },
      xAxis: {
        type: "category"
      },
      yAxis: {},
      series: [
        {
          type: "line"
        },
        {
          type: "bar"
        },
        {
          type: "pie",
          roseType: "angle"
        }
      ]
    };

    myChart.setOption(option);
  }

  render() {
    return <div ref={obj => (this.div = obj)} className="chart" />;
  }
}
