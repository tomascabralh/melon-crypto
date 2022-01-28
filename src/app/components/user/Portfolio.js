import {
  HStack,
  Text,
  Box,
  Heading,
  Flex,
  Grid,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import CurrencySelector from "../coins/coinPage/CurrencySelector";
import AddCoin from "./portfolio/AddCoin";
import PortfolioTable from "./portfolio/PortfolioTable";

const Portfolio = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" ml={100}>
        <Box mx={25}>
          <Heading size={"lg"}>Balance</Heading>
          <HStack mt={5}>
            <Heading mr={5} size={"xl"}>
              $345,67
            </Heading>
            <Text fontSize={"md"} fontWeight={300}>
              23.36%
            </Text>
          </HStack>
          <Box mt={5}>
            <AddCoin />
          </Box>
          <Box mt={5} w={110}>
            <CurrencySelector />
          </Box>
        </Box>
        <Spacer />
        <Box colSpan={3}>
          <PortfolioTable />
        </Box>

        <Spacer />
      </Grid>
    </Box>
  );
};

export default Portfolio;
