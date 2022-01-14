import React, { useState, useEffect } from "react";
import { Box, Flex, Link } from "@chakra-ui/layout";
import { Tr, Td, Checkbox, useToast } from "@chakra-ui/react";
import CoinDayVariation from "../coinPage/CoinDayVariation";
import { RiStarLine } from "react-icons/ri";
import { useAuth } from "../../contexts/AuthContext";
import { update, ref, getDatabase } from "firebase/database";

const CoinTableRow = ({ coins }, { watchlist }) => {
  const [cryptos, setCryptos] = useState([]);
  const [checkStatus, setCheckStats] = useState(false);
  const { currentUser, users } = useAuth();

  const toast = useToast();

  const ShowToast = () => {
    if (checkStatus === true) {
      return "Added to watchlist";
    } else if (checkStatus === false) {
      return "Removed from watchlist";
    }
  };

  const addWatchlist = (id) => {
    if (checkStatus === true) {
      setCheckStats(false);
    } else {
      setCheckStats(true);
    }
    let object = {};
    object[`n${id}`] = checkStatus;
    update(
      ref(getDatabase(), "users/" + currentUser.uid + "/watchlist"),
      object
    );
    toast({
      title: ShowToast(),
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  useEffect(() => {
    setCryptos([coins]);
  }, [coins]);

  return (
    <>
      {console.log(cryptos)}
      {console.log(users)}
      {cryptos[0]?.map((coin) => {
        if (users !== null) {
          return (
            <Tr
              key={coin.market_cap_rank}
              _hover={{
                background: "green.100",
              }}
            >
              <Td>
                <Checkbox
                  icon={<RiStarLine />}
                  colorScheme="teal"
                  size="lg"
                  isChecked={
                    users === undefined
                      ? users?.watchlist[`n${coin?.market_cap_rank}`]
                      : false
                  }
                  onChange={() => {
                    setCheckStats(users?.watchlist[`n${coin.market_cap_rank}`]);
                    addWatchlist(coin.market_cap_rank);
                  }}
                ></Checkbox>
              </Td>
              <Td>{coin.market_cap_rank}</Td>
              <Td>
                <Link
                  href={`/coins/${coin.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Flex>
                    <img
                      src={coin.image}
                      width="30"
                      height="5"
                      alt={coin.name}
                    />
                    <Box ml={5}>{coin.name}</Box>
                  </Flex>
                </Link>
              </Td>
              <Td>{`$ ${coin.current_price}`}</Td>
              <Td>
                <CoinDayVariation
                  porcentageVar={coin.price_change_percentage_24h}
                />
              </Td>
              <Td>{coin.market_cap}</Td>
            </Tr>
          );
        }
      })}
    </>
  );
};

export default CoinTableRow;
