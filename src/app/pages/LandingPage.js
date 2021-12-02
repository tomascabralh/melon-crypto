import { Center, Text, VStack, Box } from "@chakra-ui/react";
import React from "react";
import CoinTable from "../components/coins/CoinTable";

const LandingPage = () => {
  return (
    <Box pt={6}>
      <Center padding={4}>
        <VStack>
          <Text fontSize={48}>🍈 Melon Crypto 🍈</Text>
          <Text fontSize={40}>🍈 The best crypto news around 🍈</Text>
        </VStack>
      </Center>
      <CoinTable />
    </Box>
  );
};

export default LandingPage;
