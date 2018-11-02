export class Chart1 extends React.PureComponent {
  componentDidMount() {
    var myChart = echarts.init(this.div, "chalk");

    var option = {
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      legend: {
        data: ["销量"]
      },
      xAxis: {
        type: "category",
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "line",
          smooth: true,
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        },
        {
          name: "销量1",
          type: "bar",
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        },
        {
          name: "销量2",
          type: "pie",
          radius: "50%",
          roseType: "angle",
          data: [
            { value: Math.random() * 100, name: "衬衫" },
            { value: Math.random() * 100, name: "羊毛衫" },
            { value: Math.random() * 100, name: "雪纺衫" },
            { value: Math.random() * 100, name: "裤子" },
            { value: Math.random() * 100, name: "高跟鞋" },
            { value: Math.random() * 100, name: "袜子" }
          ]
        }
      ]
    };

    myChart.setOption(option);
  }

  render() {
    return <div ref={obj => (this.div = obj)} className="chart" />;
  }
}
