import React from "react";
import { Center, VStack, Box, Heading, Image } from "@chakra-ui/react";
import CoinTable from "../components/coins/coinTable/CoinTable";
import CoinCarousel from "../components/carousel/CoinsCarousel";
import NewsCarousel from "../components/carousel/NewsCarousel";
import Melon from "../../images/melon-crypto-01.png";

const LandingPage = () => {
  return (
    <Box pt={6}>
      <Center padding={4}>
        <VStack>
          <Image src={Melon} alt="melon-crypto" htmlWidth={900} />
        </VStack>
      </Center>
      <Box
        mx={{ base: 5, sm: 5, md: 5, lg: 200 }}
        my={5}
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading>Trending News</Heading>
      </Box>
      <NewsCarousel />
      <Box
        mx={{ base: 5, sm: 5, md: 5, lg: 200 }}
        my={5}
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading>Top 10 Cryptos </Heading>
      </Box>
      <CoinCarousel />
      <Box
        mx={{ base: 5, sm: 5, md: 5, lg: 200 }}
        my={5}
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading>Today's Cryptocurrency Prices by Melon Crypto</Heading>
      </Box>
      <Box mx={{ base: 5, sm: 5, md: 5, lg: 100, xl: 200 }}>
        <CoinTable />
      </Box>
    </Box>
  );
};

export default LandingPage;
