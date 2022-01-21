import React, { useState, useEffect } from "react";
import { Grid, Box, Flex, HStack, GridItem, Spacer } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import TimeSelector from "./TimeSelector";
import CurrencySelector from "./CurrencySelector";
import SpinnerUI from "../../UI/Spinner";

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
  }, [currency, day, id]);

  return (
    <>
      <Flex
        minH="600px"
        maxW="100%"
        mx={{ base: 10, sm: 10, md: 50, lg: 100 }}
        my={5}
        py={5}
      >
        <Grid>
          <GridItem w={"87vw"} mt={{ base: 250, sm: 250, md: 250, lg: 0 }}>
            {!chartdata ? (
              <SpinnerUI />
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
                      label: `Price (Past ${day} Days) in ${currency}`,
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
          </GridItem>
          <GridItem>
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
            >
              <GridItem></GridItem>
              <GridItem>
                <Box w={150} my={15}>
                  <TimeSelector
                    fetchDataFromTimeSelector={fetchDataFromTimeSelector}
                  />
                </Box>
              </GridItem>
              <GridItem>
                <Box w={150} my={15}>
                  <CurrencySelector
                    fetchDataFromCurrencySelector={
                      fetchDataFromCurrencySelector
                    }
                  />
                </Box>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default CoinChart;

//`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${dayrange}`
