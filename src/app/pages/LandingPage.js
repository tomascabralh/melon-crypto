import { Center, Text, VStack } from "@chakra-ui/react";
import React from "react";

const LandingPage = () => {
  return (
    <Center padding={4} pt={20}>
      <VStack>
        <Text fontSize={48}>🍈 Melon Crypto 🍈</Text>
        <Text fontSize={40}>🍈 The best crypto news around 🍈</Text>
      </VStack>
    </Center>
  );
};

export default LandingPage;
