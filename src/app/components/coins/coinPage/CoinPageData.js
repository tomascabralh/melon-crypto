/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import CoinStats from "./CoinStats";
import CoinChart from "./CoinChart";
import Articles from "../../news/HArticles";
import About from "./CoinAbout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const CoinPageData = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((res) => {
      setCoin(res.data);
    });
  }, []);

  return <>{coin !== undefined ? <Pepu coin={coin} /> : null}</>;
};

export default CoinPageData;

const Pepu = ({ coin }) => {
  const color = useColorModeValue("gray.500", "gray.400");
  return (
    <Box>
      <Box mx={{ md: 0, lg: 200 }} mt={5} pt={5}>
        <Breadcrumb separator=">">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" textColor={color}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/" textColor={color}>
              Coins
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Text as="i">{coin.name}</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box w="100%">
        <Flex px="20px" m="50px">
          <Box minW="200px" w="250px" h="250px" mr="50px">
            <img src={coin.image?.large} alt={coin.name} />
          </Box>
          <Flex>
            <CoinStats coin={coin} />
          </Flex>
        </Flex>
      </Box>
      <Box w="100%" h="100%">
        <CoinChart />
      </Box>
      <About coin={coin} />
      <Articles q={coin.name} searchT={"qInTitle"} />
    </Box>
  );
};
