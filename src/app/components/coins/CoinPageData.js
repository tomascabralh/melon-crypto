/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Box, Container, Flex } from "@chakra-ui/layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import CoinStats from "./CoinStats";

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
  return (
    <Box>
      <Box w="100%">
        <Flex p="20px" m="50px">
          <Box minW="200px" mr="100px">
            <img src={coin.image?.large} alt={coin.name} />
          </Box>
          <Box>
            <CoinStats coin={coin}/>
          </Box>
        </Flex>
      </Box>
      <Box w="100%" h={550}>
        <Flex px="20px" mx="50px">
          <Box minW="200px" maxW="250px" maxH={550} mr="50px" overflow="auto">
            {coin.description?.en}
          </Box>
          <Box maxH={550} overflow="auto">
            {coin.description?.en} {coin.description?.en}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
