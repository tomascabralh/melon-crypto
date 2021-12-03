import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const CoinChart = () => {
  const { id } = useParams();
  const [chartdata, setChartdata] = useState();
  const [dayrange, setDayrange] = useState("30");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30`
      )
      .then((res) => {
        setChartdata(res.data);
      });
  }, []);
  console.log(chartdata);
  return (
    <>
      <Flex maxH="400px" maxW="1000px">
        {!chartdata ? (
          "loading"
        ) : (
          <Line
            data={{
              labels: chartdata.prices.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return dayrange === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: chartdata.prices.map((coin) => coin[1]),
                  label: `Price ( Past ${dayrange} Days ) in usd`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
        )}
        <Stack>
          <Box>Time Range:</Box>
          <Box>Currency:</Box>
        </Stack>
      </Flex>
    </>
  );
};

export default CoinChart;

//`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${dayrange}`
