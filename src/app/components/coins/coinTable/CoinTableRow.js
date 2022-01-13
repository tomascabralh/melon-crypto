import React, { useState, useEffect } from "react";
import { Box, Flex, Link } from "@chakra-ui/layout";
import { Tr, Td, Checkbox, useToast } from "@chakra-ui/react";
import axios from "axios";
import CoinDayVariation from "../coinPage/CoinDayVariation";
import { RiStarLine } from "react-icons/ri";
import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../../../firebase";
import { updateProfile } from "firebase/auth";

const CoinTableRow = () => {
  const GETrequest =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  const [coins, setCoins] = useState([]);
  const [checkStatus, setCheckStats] = useState(false);

  const { currentUser } = useAuth();

  const toast = useToast();

  const ShowToast = () => {
    if (checkStatus === true) {
      return "Added to watchlist";
    } else {
      return "Removed from watchlist";
    }
  };

  const addWatchlist = async () => {
    await updateProfile(auth.currentUser, {
      phoneNumber: "asd",
    });
    console.log(auth.currentUser);
  };

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
                onChange={() => {
                  if (checkStatus === true) {
                    setCheckStats(false);
                  } else {
                    setCheckStats(true);
                  }
                  toast({
                    title: ShowToast(),
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                  });
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
                  <img src={coin.image} width="30" height="5" alt={coin.name} />
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
      })}
    </>
  );
};

export default CoinTableRow;
