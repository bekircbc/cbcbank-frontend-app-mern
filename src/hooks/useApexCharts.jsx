import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import "../styles/page_bekir.scss";

export const ApexCharts = () => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);
  const [type, setType] = useState("line");

  useEffect(() => {
    setOptions({
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [
          2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
          2022,
        ],
      },
    });
    setSeries([
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 30, 45, 65],
      },
      {
        name: "series-2",
        data: [20, 30, 55, 75, 63, 60, 80, 134, 110, 40, 55, 64],
      },
    ]);
  }, [type]);

  return (
    <div className="Apex-Chart">
      <h1>Apex Chart with Navbar</h1>
      <nav className="navbar">
        <button onClick={() => setType("bar")}>Bar</button>
        <button onClick={() => setType("line")}>Line</button>
        <button onClick={() => setType("radar")}>Radar</button>
        <button onClick={() => setType("donut")}>Donut</button>
        <button onClick={() => setType("area")}>Area</button>

        <button onClick={() => setType("histogram")}>Histogram</button>
        <button onClick={() => setType("pie")}>Pie</button>
        <button onClick={() => setType("radialBar")}>Radial Bar</button>
        <button onClick={() => setType("scatter")}>Scatter</button>
        <button onClick={() => setType("bubble")}>Bubble</button>
        <button onClick={() => setType("heatmap")}>Heatmap</button>
        <button onClick={() => setType("candleStick")}>Candle Stick</button>
      </nav>

      <Chart
        options={options}
        series={series}
        type={type} //"bar","line", "donut","area", "radar", "histogram", "pie", "radialBar", scatter, bubble, heatmap, candlestick
        width={800}
        height={520}
      />
    </div>
  );
};
