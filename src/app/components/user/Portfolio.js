import React, { useState } from "react";
import {
  HStack,
  Text,
  Box,
  Heading,
  Flex,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import AddCoin from "./portfolio/AddCoin";
import PortfolioTable from "./portfolio/PortfolioTable";
import CoinDayVariation from "../coins/coinPage/CoinDayVariation";
import SpinnerUI from "../UI/Spinner";
import PortfolioPieChart from "./portfolio/PortfolioPieChart";

const Portfolio = () => {
  const [stats, setStats] = useState();
  const fetchStats = (stat) => {
    setStats(stat);
  };

  const balance = (stat) => {
    var tot = stat.reduce((sum, a) => sum + a.hold_price, 0);
    return tot;
  };

  const profitLoss = (coin) => {
    var current = balance(coin);
    var spent = coin.reduce((sum, a) => sum + a.spent, 0);
    return ((current - spent) / spent) * 100;
  };

  return (
    <Box>
      <Flex>
        <VStack mx="auto" my={"auto"}>
          <Heading size={"xl"}>Balance</Heading>
          <Text mx="auto" fontSize={50}>
            ${stats ? balance(stats).toFixed(2) : <SpinnerUI />}
          </Text>
          <Text>
            <CoinDayVariation
              porcentageVar={
                stats ? profitLoss(stats).toFixed(2) : <SpinnerUI />
              }
            />
          </Text>
          <AddCoin />
          <Spacer />
          <Spacer />
          <PortfolioPieChart stats={stats} />
          <Spacer />
        </VStack>
        <Box mx="auto">
          <PortfolioTable fetchStats={fetchStats} />
        </Box>
      </Flex>
      <Spacer />
    </Box>
  );
};

export default Portfolio;
