import Highcharts from "highcharts";
import { useState, useEffect } from "react";
import getDataApi from "../../apicalls/dataCharts";

const PieChart = () => {
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
            color: "#2874A6",
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
        type: "pie",
        renderTo: "containerPie",
      },
      title: {
        text: "Cantidad de manzanas vendidas",
      },
      subtitle: {
        text: "Manzanas vendidas por mes",
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
      id="containerPie"
      className="w-[48%] rounded-lg border-[rgb(206, 206, 206)]"
      style={{ borderWidth: "1px" }}
    ></div>
  );
};

export default PieChart;
