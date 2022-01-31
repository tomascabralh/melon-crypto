import React, { useState } from "react";
import {
  Text,
  Box,
  Heading,
  Spacer,
  VStack,
  Grid,
  GridItem,
  HStack,
  Tag,
  Tooltip,
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

  const variation = (coin) => {
    var current = balance(coin);
    var spent = coin.reduce((sum, a) => sum + a.spent, 0);
    if (current - spent > 0) {
      return `+ $${current - spent}`;
    } else if (current - spent < 0) {
      return `- $${current - spent}`;
    } else {
      return `$${current - spent}`;
    }
  };

  return (
    <Box>
      <Grid
        templateColumns={{
          base: "repeat(1, 3fr)",
          sm: "repeat(1, 3fr)",
          md: "repeat(1, 3fr)",
          lg: "repeat(3, 1fr)",
        }}
        mx={{ base: 5, sm: 5, md: 5, lg: 20 }}
        minH={"60vh"}
      >
        <GridItem>
          <VStack mx="auto" my={10}>
            <Heading size={"xl"}>Balance</Heading>
            <Text fontSize={{ base: 25, sm: 40, md: 50, lg: 50 }}>
              ${stats ? balance(stats).toFixed(2) : <SpinnerUI />}
            </Text>
            <Tooltip label={stats ? variation(stats) : null} placement="left">
              <HStack>
                <Text>
                  <CoinDayVariation
                    porcentageVar={stats ? profitLoss(stats).toFixed(2) : 0}
                  />
                </Text>
                <Tag size="sm">24 hs</Tag>
              </HStack>
            </Tooltip>
            <AddCoin stats={stats} />
            <Box w={{ base: 260, sm: 350, md: 450, lg: 320 }}>
              <PortfolioPieChart stats={stats} />
            </Box>
          </VStack>
        </GridItem>
        <GridItem colSpan={2} mx={{ base: 5, sm: 5, md: 5, lg: 5 }} mb={10}>
          <Box>
            <Heading size={"lg"} my={5}>
              Your Assets
            </Heading>
            <PortfolioTable fetchStats={fetchStats} />
          </Box>
        </GridItem>
      </Grid>
      <Spacer />
    </Box>
  );
};

export default Portfolio;
