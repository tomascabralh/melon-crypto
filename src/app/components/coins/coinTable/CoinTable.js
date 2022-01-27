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

const CoinTable = (props) => {
  const bg = useColorModeValue("#9AE6B4", "green.800");
  const bgColumn = useColorModeValue("#9AE6B4", "#22543D");
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
      maxH={props.h ? props.h : null}
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
          <Tr
            css={{
              position: "sticky",
              top: 0,
              zindex: 0,
              background: bgColumn,
            }}
          >
            {titles.map((head) => {
              return <Th key={head}>{head}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          <CoinTableRow
            coins={props.watchlist ? watchlistCoins(props.watchlist) : coins}
          />
        </Tbody>
      </Table>
    </Box>
  );
};

export default CoinTable;
