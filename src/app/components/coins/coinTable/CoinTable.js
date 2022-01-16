import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/layout";
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
import axios from "axios";
import CoinTableRow from "./CoinTableRow";
import { useColorModeValue } from "@chakra-ui/color-mode";

const CoinTable = ({ watchlist }) => {
  const bg = useColorModeValue("#9AE6B4", "green.800");
  const titles = ["", "Top", "Coin", "Price (USD)", "24h %", "Market Cap"];

  const GETrequest =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(GETrequest).then((res) => {
      setCoins(res.data);
    });
  }, []);

  const watchlistCoins = (watchlist) => {
    if (watchlist.watchlist !== undefined) {
      console.log(watchlist?.watchlist);
      var keys = Object.keys(watchlist?.watchlist);
      var filterToApply = keys.filter(function (key) {
        return watchlist?.watchlist[key];
      });
      var filterToApply = filterToApply.map((s) => s.slice(1));
      var filterToApply = filterToApply.map((s) => parseInt(s) - 1);
      console.log(filterToApply);
      var filteredCoins = coins.filter(function (eachElem, index) {
        return filterToApply.indexOf(index) !== -1;
      });
      console.log(filteredCoins);
      return filteredCoins;
    }
  };

  return (
    <Box
      my={10}
      bgColor={bg}
      borderRadius="5px"
      overflow="auto"
      sx={{
        "&::-webkit-scrollbar": {
          width: "8px",
          borderRadius: "8px",
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },

        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
          borderRadius: "8px",
        },
      }}
    >
      <Table size="lg">
        <Thead>
          <Tr>
            {titles.map((head) => {
              return <Th key={head}>{head}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          <CoinTableRow coins={watchlist ? watchlistCoins(watchlist) : coins} />
        </Tbody>
      </Table>
    </Box>
  );
};

export default CoinTable;
