import { Center, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CoinTable from "../components/coins/CoinTable";

const LandingPage = () => {
  return (
    <>
      <Center padding={4}>
        <VStack>
          <Text fontSize={48}>🍈 Melon Crypto 🍈</Text>
          <Text fontSize={40}>🍈 The best crypto news around 🍈</Text>
        </VStack>
      </Center>
      <CoinTable />
    </>
  );
};

export default LandingPage;
