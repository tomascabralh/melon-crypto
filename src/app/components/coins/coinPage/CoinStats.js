import { Box, Grid, Heading, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import LowHighBar from "./LowHighBar";
import CoinDayVariation from "./CoinDayVariation";
import CurrencySelector from "./CurrencySelector";
import { HStack, Spacer } from "@chakra-ui/react";

const CoinStats = ({ coin }) => {
  const [currency, setCurrency] = useState("usd");

  const fetchDataFromCurrencySelector = (Currency) => {
    setCurrency(Currency);
  };

  return (
    <>
      <Box w="1450px" h="250px">
        <Grid
          templateColumns={{ md: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={6}
          boxShadow="base"
          rounded="md"
        >
          <Box
            w="100%"
            h="250"
            borderRight="2px"
            borderColor="gray.100"
            px={10}
            py={2}
          >
            <HStack>
              <Box mb="5">
                <Heading mt="30" w="300">
                  {coin.name}
                </Heading>
                <Text>#{coin.market_cap_rank}</Text>
              </Box>
              <Spacer />
              <Box fontSize="4xl" textAlign="right">
                <CoinDayVariation
                  porcentageVar={
                    coin.market_data.price_change_percentage_24h_in_currency.usd
                  }
                />
                {coin.market_data.current_price[currency]}
                <Box w={100}>
                  <CurrencySelector
                    fetchDataFromCurrencySelector={
                      fetchDataFromCurrencySelector
                    }
                  />
                </Box>
              </Box>
            </HStack>
            <Grid templateColumns="repeat(2, 1fr)" mt={5}>
              <Box fontSize="lg" textAlign="left">
                Lowest 24h
                <Text fontSize="sm">{coin.market_data.low_24h[currency]}</Text>
              </Box>
              <Box fontSize="lg" textAlign="right">
                Highest 24h
                <Text fontSize="sm">{coin.market_data.high_24h[currency]}</Text>
              </Box>
            </Grid>
            <LowHighBar coin={coin} />
          </Box>
          <Box w="100%" h="250" px={10} py={2}>
            <Grid templateColumns="repeat(2, 1fr)">
              <Box h="100" my={3} borderBottom="2px" borderColor="gray.100">
                <Heading size="md">Market Cap</Heading>
                <Text>${coin.market_data.market_cap[currency]}</Text>
                <CoinDayVariation
                  porcentageVar={
                    coin.market_data.market_cap_change_percentage_24h
                  }
                />
              </Box>
              <Box
                h="100"
                my={3}
                textAlign="right"
                borderBottom="2px"
                borderColor="gray.100"
              >
                <Heading size="md">Volume 24h</Heading>
                <Text>${coin.market_data.total_volume[currency]}</Text>
              </Box>
              <Box h="100" my={3}>
                <Heading size="md">Fully Diluted Market Cap</Heading>
                <Text>
                  ${coin.market_data.fully_diluted_valuation[currency]}
                </Text>
                <CoinDayVariation
                  porcentageVar={
                    coin.market_data.market_cap_change_percentage_24h
                  }
                />
              </Box>
              <Box h="100" my={3} textAlign="right">
                <Heading size="md">Circulating Supply</Heading>
                <Text>
                  {coin.market_data.circulating_supply} {coin.symbol}
                </Text>
                <Text>
                  Max Supply: {coin.market_data.max_supply} {coin.symbol}
                </Text>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default CoinStats;
