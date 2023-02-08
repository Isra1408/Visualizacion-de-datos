import Highcharts from "highcharts";
import { useEffect } from "react";
import getDataApi from "../../apicalls/dataCharts";

const BarChart = () => {
  const mes = [];
  const dataArr = [];

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await getDataApi();
      dataArr.push({
        name: "Manzanas",
        data: res.data.map((val) => {
          return {
            name: val.mes,
            y: val.cantidad,
          };
        }),
      });
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
        type: "column",
        renderTo: "containerCol",
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
      series: dataArr,

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
      id="containerCol"
      className="w-[48%] rounded-lg border-[rgb(206, 206, 206)]"
      style={{ borderWidth: "1px" }}
    ></div>
  );
};

export default BarChart;
