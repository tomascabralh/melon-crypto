import { Center, VStack, Box, Heading } from "@chakra-ui/react";
import React from "react";
import CoinTable from "../components/coins/coinTable/CoinTable";
import CoinCarousel from "../components/carousel/CoinsCarousel";
import NewsCarousel from "../components/carousel/NewsCarousel";
import { useAuth } from "../components/contexts/AuthContext";

const LandingPage = () => {
  const { currentUser } = useAuth();
  return (
    <Box pt={6}>
      <Center padding={4}>
        <VStack>
          <Heading my={10}>🍈 Melon Crypto 🍈</Heading>
          <Heading>🍈 The best crypto news around 🍈</Heading>
        </VStack>
      </Center>
      <Box
        mx={{ md: 0, lg: 200 }}
        my={5}
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading>Trending News</Heading>
      </Box>
      <NewsCarousel />
      <Box
        mx={{ md: 0, lg: 200 }}
        my={5}
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading>Top 10 Cryptos </Heading>
      </Box>
      <CoinCarousel />
      <Box
        mx={{ md: 0, lg: 200 }}
        my={5}
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading>Today's Cryptocurrency Prices by Melon Crypto</Heading>
      </Box>
      <Box mx={{ md: 0, lg: 100, xl: 300 }}>
        <CoinTable />
      </Box>
    </Box>
  );
};

export default LandingPage;
