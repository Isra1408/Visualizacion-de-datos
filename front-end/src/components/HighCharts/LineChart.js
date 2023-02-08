import Highcharts from "highcharts";
// Load the exporting module.
import * as Exporting from "highcharts/modules/exporting";
import TreeMap from "highcharts/modules/treemap";
import HighchartsMore from "highcharts/highcharts-more";
import { useEffect } from "react";
import getDataApi from "../../apicalls/dataCharts";

// Initialize exporting module.
Exporting(Highcharts);
HighchartsMore(Highcharts);
TreeMap(Highcharts);

const LineChart = () => {
  const mes = [];
  const dataArr = [];

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await getDataApi();
      dataArr.push(
        res.data.map((val) => {
          return val.cantidad;
        })
      );
      mes.push(
        res.data.map((val) => {
          return val.mes;
        })
      );
      chart();
    } catch (error) {
      console.log(error);
    }
  };

  const chart = () => {
    Highcharts.chart({
      chart: {
        type: "line",
        renderTo: "container",
      },

      title: {
        text: "Cantidad de manzanas vendidas",
      },
      subtitle: {
        text: "Manzanas vendidas por mes",
      },
      xAxis: {
        categories: mes.flat(),
      },
      series: [
        {
          name: "Manzanas",
          data: dataArr.flat(),
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    });
  };

  return (
    <div
      id="container"
      className="w-[48%] rounded-lg border-[rgb(206, 206, 206)]"
      style={{ borderWidth: "1px" }}
    ></div>
  );
};

export default LineChart;
