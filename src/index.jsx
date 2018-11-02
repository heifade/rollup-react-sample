import { Chart1 } from "./Chart1";
import { Chart2 } from "./Chart2";
import * as json from "./theme";

echarts.registerTheme("t1", json);

const div = document.getElementById("div1");

ReactDOM.render(
  <div>
    <Chart1 />
    <Chart2 />
  </div>,
  div
);
