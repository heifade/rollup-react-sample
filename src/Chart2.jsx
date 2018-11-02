export class Chart2 extends React.PureComponent {
  componentDidMount() {
    const myChart = echarts.init(this.div, "chalk");

    myChart.setOption({
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      xAxis: [
        { type: "category", gridIndex: 0 },
        { type: "category", gridIndex: 1 }
      ],
      grid: [
        { bottom: "55%" }, 
        { top: "55%" }
      ],
      yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
      series: [
        { type: "bar", xAxisIndex: 0, yAxisIndex: 0 },
        { type: "bar", xAxisIndex: 0, yAxisIndex: 0 },
        { type: "bar", xAxisIndex: 0, yAxisIndex: 0 },

        {
          type: "line",
          xAxisIndex: 1,
          yAxisIndex: 1,
          smooth: true,
          encode: { itemName: "product", value: "2015" }
        },
        {
          type: "line",
          xAxisIndex: 1,
          yAxisIndex: 1,
          smooth: true,
          encode: { itemName: "product", value: "2016" }
        },
        {
          type: "scatter",
          xAxisIndex: 1,
          yAxisIndex: 1,
          smooth: true,
          encode: { itemName: "product", value: "2017" }
        }
      ]
    });

    myChart.showLoading();

    const chartRender = () => {
      myChart.hideLoading();
      myChart.setOption({
        dataset: {
          dimensions: ["product", "2015", "2016", "2017"],
          source: [
            [
              "衬衫",
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ],
            [
              "羊毛衫",
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ],
            [
              "雪纺衫",
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ],
            [
              "裤子",
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ],
            [
              "高跟鞋",
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ],
            [
              "袜子",
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          ]
        }
      });
    };

    setInterval(() => {
      chartRender();
    }, 500);
  }

  render() {
    return <div ref={obj => (this.div = obj)} className="chart" />;
  }
}
