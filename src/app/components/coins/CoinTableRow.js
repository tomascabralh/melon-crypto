import { Box, Flex, Link } from "@chakra-ui/layout";
import { Tr, Td } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const CoinTableRow = () => {
  const GETrequest =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(GETrequest).then((res) => {
      setCoins(res.data);
    });
  }, []);

  return (
    <>
      {coins.map((coin) => {
        return (
          <Tr
            _hover={{
              background: "green.100",
            }}
          >
            <Td>{coin.market_cap_rank}</Td>
            <Td>
              <Link href={`/coin/${coin.id}`}>
                <Flex>
                  <img src={coin.image} width="30" height="5" />
                  <Box ml={5}>{coin.name}</Box>
                </Flex>
              </Link>
            </Td>
            <Td>{coin.current_price}</Td>
            {coin.price_change_percentage_24h >= 0 ? (
              <Td color="green">{coin.price_change_percentage_24h}</Td>
            ) : (
              <Td color="red">{coin.price_change_percentage_24h}</Td>
            )}
            <Td>{coin.market_cap}</Td>
          </Tr>
        );
      })}
    </>
  );
};

export default CoinTableRow;
