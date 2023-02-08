import Highcharts from "highcharts";
import { useEffect } from "react";
import getDataApi from "../../apicalls/dataCharts";

const Treemap = () => {
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
            value: val.cantidad,
            color: "#E45C4E",
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
        type: "treemap",
        renderTo: "containerTree",
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
      id="containerTree"
      className="w-[48%] rounded-lg border-[rgb(206, 206, 206)]"
      style={{ borderWidth: "1px" }}
    ></div>
  );
};

export default Treemap;
