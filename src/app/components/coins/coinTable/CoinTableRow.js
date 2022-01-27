import React, { useState, useEffect } from "react";
import {
  Tr,
  Td,
  Checkbox,
  useToast,
  useColorModeValue,
  Box,
  Flex,
  Link,
  Image,
} from "@chakra-ui/react";
import CoinDayVariation from "../coinPage/CoinDayVariation";
import { RiStarLine } from "react-icons/ri";
import { useAuth } from "../../contexts/AuthContext";
import { update, ref, getDatabase } from "firebase/database";

const CoinTableRow = ({ coins }) => {
  const [cryptos, setCryptos] = useState([]);

  const { currentUser, users } = useAuth();

  const toast = useToast();

  const bgColumn = useColorModeValue("#9AE6B4", "#22543D");

  const ShowToast = (id) => {
    if (users?.watchlist[`n${id}`] === true) {
      return "Removed from watchlist";
    } else if (users?.watchlist[`n${id}`] === false) {
      return "Added to watchlist";
    }
  };

  const updateWatchlist = async (id) => {
    let object = {};
    object[`n${id}`] = !users?.watchlist[`n${id}`];
    await update(
      ref(getDatabase(), "users/" + currentUser.uid + "/watchlist"),
      object
    );
    toast({
      title: ShowToast(id),
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  useEffect(() => {
    setCryptos([coins]);
  }, [users, coins]);

  return (
    <>
      {cryptos[0]?.map((coin) => {
        return (
          <Tr key={coin.market_cap_rank}>
            <Td>
              <Checkbox
                icon={<RiStarLine />}
                colorScheme="teal"
                size="lg"
                isChecked={
                  users !== null
                    ? users?.watchlist[`n${coin?.market_cap_rank}`]
                    : false
                }
                onChange={() => {
                  if (users !== null) {
                    updateWatchlist(coin?.market_cap_rank);
                  } else {
                    toast({
                      title: "You must be logged in to create a watchlist",
                      status: "info",
                      duration: 4000,
                      isClosable: true,
                      position: "top",
                    });
                  }
                }}
              />
            </Td>
            <Td>{coin.market_cap_rank}</Td>
            <Td
              css={{
                position: "sticky",
                left: 0,
                zindex: 2,
                background: bgColumn,
              }}
            >
              <Link
                href={`/coins/${coin.id}`}
                style={{ textDecoration: "none" }}
              >
                <Flex>
                  <Image
                    src={coin.image}
                    boxSize={{
                      base: "30px",
                      sm: "30px",
                      md: "30px",
                      lg: "30px",
                    }}
                    alt={coin.name}
                  />
                  <Box ml={5}>{coin.name}</Box>
                </Flex>
              </Link>
            </Td>
            <Td
              css={{
                left: 0,
                zindex: 0,
              }}
            >{`$ ${coin.current_price}`}</Td>
            <Td css={{ zindex: 0 }}>
              <CoinDayVariation
                porcentageVar={coin.price_change_percentage_24h}
              />
            </Td>
            <Td css={{ zindex: 0 }}>{coin.market_cap}</Td>
          </Tr>
        );
      })}
    </>
  );
};

export default CoinTableRow;
