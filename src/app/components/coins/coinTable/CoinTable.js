import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import CoinTableRow from "./CoinTableRow";

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
      var keys = Object.keys(watchlist?.watchlist);
      var filterToApply = keys.filter(function (key) {
        return watchlist?.watchlist[key];
      });
      var filterToApplya = filterToApply.map((s) => s.slice(1));
      var FilterToApply = filterToApplya.map((s) => parseInt(s) - 1);
      var filteredCoins = coins.filter(function (eachElem, index) {
        return FilterToApply.indexOf(index) !== -1;
      });
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
        <Thead position={"sticky"} top={1}>
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
