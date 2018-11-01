
export class Chart1 extends React.PureComponent {
  componentDidMount() {
    var myChart = echarts.init(this.div);

    var option = {
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      legend: {
        data: ["销量"]
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "line",
          smooth: true,
          data: [5, 20, 36, 10, 10, 20]
        },
        {
          name: "销量1",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        },
        {
          name: "销量2",
          type: "pie",
          radius: "55%",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };

    myChart.setOption(option);
  }

  render() {
    return <div ref={obj => (this.div = obj)} className="chart" />;
  }
}
