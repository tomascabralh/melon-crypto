import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Flex, Stack } from "@chakra-ui/layout";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import TimeSelector from "./TimeSelector";
import CurrencySelector from "./CurrencySelector";

const CoinChart = () => {
  const { id } = useParams();
  const [chartdata, setChartdata] = useState();
  const [day, setDay] = useState(1);
  const [currency, setCurrency] = useState("usd");

  const fetchDataFromTimeSelector = (days) => {
    setDay(days);
  };

  const fetchDataFromCurrencySelector = (Currency) => {
    setCurrency(Currency);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${day}`
      )
      .then((res) => {
        setChartdata(res.data);
      });
  }, [currency, day]);

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
                return day === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: chartdata.prices.map((coin) => coin[1]),
                  label: `Price ( Past ${day} Days ) in ${currency}`,
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
          <TimeSelector fetchDataFromTimeSelector={fetchDataFromTimeSelector} />
          <CurrencySelector
            fetchDataFromCurrencySelector={fetchDataFromCurrencySelector}
          />
        </Stack>
      </Flex>
    </>
  );
};

export default CoinChart;

//`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${dayrange}`
