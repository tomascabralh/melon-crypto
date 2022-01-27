import {
  HStack,
  Spacer,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  VStack,
  Box,
} from "@chakra-ui/react";
import React from "react";
import AddCoin from "./portfolio/AddCoin";

const Portfolio = () => {
  return (
    <Box>
      <HStack mx={50}>
        <AddCoin />
        <Spacer />
        <Box>
          <Stat>
            <StatLabel>Balance</StatLabel>
            <StatNumber> $ 345,67</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>
      </HStack>
    </Box>
  );
};

export default Portfolio;
