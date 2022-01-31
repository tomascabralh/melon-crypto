/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import {
  useColorModeValue,
  Input,
  Box,
  InputRightElement,
  InputGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import axios from "axios";

const SearchCoin = (props) => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "gray.50");
  const resultsBg = useColorModeValue("gray.50", "gray.700");
  const hover = useColorModeValue("green.100", "green.700");

  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");
  const [coins, setCoins] = useState([]);

  const onSearch = (e) => {
    var searchWord = e.target.value;
    const newfilter = coins.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setInput(searchWord);
    setFilteredData(newfilter);
  };

  const selectCoin = (coin) => {
    setInput(coin.name);
    setFilteredData([]);
  };

  const GETrequest =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  useEffect(() => {
    axios.get(GETrequest).then((res) => {
      setCoins(res.data);
    });
  }, []);

  //onBlur={() => setInput("")}

  return (
    <Box>
      <InputGroup>
        <Input
          size="sm"
          background={bg}
          rounded="md"
          px={2}
          value={input}
          color={color}
          variant="flushed"
          placeholder={"Select a Coin"}
          onChange={onSearch}
          onFocus={() => setFilteredData(coins)}
        />
        {input?.length > 0 ? (
          <InputRightElement>
            <Button
              size="sm"
              h="1.50rem"
              mb={2}
              fontWeight={1000}
              variant="ghost"
              onClick={() => setInput("")}
            >
              X
            </Button>
          </InputRightElement>
        ) : null}
      </InputGroup>
      {input?.length >= 0 && (
        <>
          <Box
            mt={3}
            borderRadius="3px"
            overflow="auto"
            overflowY="auto"
            maxH={"162px"}
            bg={resultsBg}
            sx={{
              "&::-webkit-scrollbar": {
                width: "8px",
                borderRadius: "8px",
              },

              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "gray.400",
                borderRadius: "8px",
              },
            }}
          >
            {filteredData.map((coin, index) => {
              return (
                <Box key={index}>
                  <Button
                    p={2}
                    px={3}
                    _hover={{
                      background: hover,
                    }}
                    w="100%"
                    variant={"link"}
                    alignContent={"left"}
                    onClick={() => {
                      selectCoin(coin);
                      props.getCoin(coin);
                    }}
                  >
                    <Image
                      src={coin.image}
                      boxSize={{
                        base: "20px",
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                      }}
                      alt={coin.name}
                      mr={5}
                    />
                    {coin.name}
                  </Button>
                </Box>
              );
            })}
          </Box>
        </>
      )}
    </Box>
  );
};

export default SearchCoin;
