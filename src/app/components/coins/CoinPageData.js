/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import CoinStats from "./CoinStats";
import CoinChart from "./CoinChart";


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
          <Box minW="200px" w="250px" h="250px" mr="50px">
            <img src={coin.image?.large} alt={coin.name} />
          </Box>
          <Flex>
            <CoinStats coin={coin} />
          </Flex>
        </Flex>
      </Box>
      <Box w="100%" h='100%'>
        <Flex px="20px" mx="50px">
          <Box minW="200px" maxW="300px" maxH={650} mr="50px" mb='50px' overflow="auto" display={{ lg: "none", xl: "none", '2xl':'block' }}>
            {coin.description?.en}
          </Box>
          <Box>
            <CoinChart />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
