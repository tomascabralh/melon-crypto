import { Center, Text, VStack, Box, Heading } from "@chakra-ui/react";
import React from "react";
import CoinTable from "../components/coins/CoinTable";
import CoinCarousel from "../components/carousel/Carousel";
import NewsCarousel from "../components/carousel/NewsCarousel";

const LandingPage = () => {
  return (
    <Box pt={6}>
      <Center padding={4}>
        <VStack>
          <Heading my={10}>🍈 Melon Crypto 🍈</Heading>
          <Heading>🍈 The best crypto news around 🍈</Heading>
        </VStack>
      </Center>
      <Heading mx={{ md: 0, lg: 300 }} my={10}>
        Trending News{" "}
      </Heading>
      <NewsCarousel />
      <Heading mx={{ md: 0, lg: 300 }} my={10}>
        Top 10 Cryptos{" "}
      </Heading>
      <CoinCarousel />
      <Heading mx={{ md: 0, lg: 300 }} my={10}>
        Today's Cryptocurrency Prices by Melon Crypto
      </Heading>
      <CoinTable />
    </Box>
  );
};

export default LandingPage;
