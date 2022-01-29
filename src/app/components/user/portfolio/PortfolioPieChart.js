import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";
import SpinnerUI from "../../UI/Spinner";

const PortfolioPieChart = (props) => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);

  const colors = [
    "rgba(255, 99, 132)",
    "rgba(54, 162, 235)",
    "rgba(255, 206, 86)",
    "rgba(75, 192, 192)",
    "rgba(153, 102, 255)",
    "rgba(255, 159, 64)",
    "rgb(128,128,0)",
    "rgb(255, 255, 255)",
    "rgb(0,0,0)",
    "rgb(0, 128, 0)",
    "rgb(0,128,128)",
    "rgb(0,255,255)",
  ];

  useEffect(() => {
    var labelArray = [];
    var dataArray = [];
    if (props.stats !== undefined) {
      props.stats.map((coin) => {
        labelArray.push(coin.name);
        dataArray.push(coin.hold_price);
        return;
      });
      setLabels(labelArray);
      setData(dataArray);
    }
  }, [props.stats]);

  return (
    <Box>
      {labels ? (
        <Doughnut
          data={{
            labels: labels,
            datasets: [
              {
                label: "Balance Distribution",
                data: data,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
              },
            ],
          }}
        />
      ) : (
        <SpinnerUI />
      )}
    </Box>
  );
};

export default PortfolioPieChart;
