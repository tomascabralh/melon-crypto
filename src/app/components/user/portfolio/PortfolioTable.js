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
import { getDatabase, ref, onValue } from "firebase/database";
import { useAuth } from "../../contexts/AuthContext";
import PortfolioTableRow from "./PortfolioTableRow";
import _ from "lodash";

const PortfolioTable = (props) => {
  const bg = useColorModeValue("#9AE6B4", "green.800");
  const bgColumn = useColorModeValue("#9AE6B4", "#22543D");
  const titles = ["Coin", "Price (USD)", "24h %", "Holdings", "Profit/Loss"];
  const [coins, setCoins] = useState([]);
  const [coinObj, setCoinObj] = useState([]);

  const { currentUser } = useAuth();

  function setCoinObject(data, filter) {
    var objectArray = [];
    filter.map((coinName) => {
      var filteredArray = data.filter((obj) => {
        return obj.coin === coinName;
      });
      var filteredCoins = coins.filter((obj) => {
        return obj.id === coinName;
      });
      var object = {};
      object.coin = coinName;
      object.holdings = sum1(filteredArray);
      object.spent = sum2(filteredArray);
      object.symbol = filteredCoins[0].symbol;
      object.price_change = filteredCoins[0].price_change_percentage_24h;
      object.image = filteredCoins[0].image;
      object.price = filteredCoins[0].current_price;
      object.name = filteredCoins[0].name;
      object.hold_price = sum1(filteredArray) * filteredCoins[0].current_price;

      function sum1(args) {
        var tot = 0;
        args.forEach((obj) => {
          if (obj?.action === "buy") {
            tot += parseFloat(obj?.quantity);
          } else {
            tot -= parseFloat(obj?.quantity);
          }
        });
        return tot;
      }
      function sum2(args) {
        var tot = 0;
        args.forEach((obj) => {
          if (obj?.action === "buy") {
            tot += parseFloat(obj?.pxq);
          } else {
            tot -= parseFloat(obj?.pxq);
          }
        });
        return tot;
      }
      objectArray.push(object);
    });
    setCoinObj(objectArray);
    props.fetchStats(objectArray);
  }

  function filterCoinNames(moves) {
    var array = [];
    moves.map((transaction) => {
      if (
        array.includes(transaction.coin) === false &&
        transaction.coin !== undefined
      ) {
        array.push(transaction.coin);
      }
    });
    return array;
  }

  const GETrequest =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  useEffect(() => {
    axios.get(GETrequest).then((res) => {
      setCoins(res.data);
    });
    const db = ref(getDatabase(), `users/${currentUser?.uid}/portfolio`);
    onValue(db, (snapshot) => {
      const data = snapshot.val();
      setCoinObject(_.toArray(data), filterCoinNames(_.toArray(data)));
    });
  }, [currentUser]);

  return (
    <Box
      bgColor={bg}
      borderRadius="5px"
      overflow="auto"
      maxH={600}
      w={1000}
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
          <PortfolioTableRow coinObject={coinObj} />
        </Tbody>
      </Table>
    </Box>
  );
};

export default PortfolioTable;
