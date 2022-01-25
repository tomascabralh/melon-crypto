/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import {
  useColorModeValue,
  Input,
  Box,
  Link,
  Kbd,
  Text,
  Center,
  InputRightElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "gray.50");
  const resultsBg = useColorModeValue("gray.50", "gray.700");
  const resultsKBD = useColorModeValue("gray.100", "gray.700");
  const hover = useColorModeValue("green.100", "green.700");

  const navigate = useNavigate();

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

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && input !== "") {
      navigate(`/news/search/search_query=${input}`);
      setInput("");
    }
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
          placeholder="Search . . ."
          onChange={onSearch}
          onKeyPress={handleKeyPress}
        />
        {input !== "" ? (
          <InputRightElement>
            <Button
              size="sm"
              h="1.50rem"
              mb={2}
              fontWeight={1000}
              variant="ghost"
              onClick={() => {
                setInput("");
              }}
            >
              X
            </Button>
          </InputRightElement>
        ) : null}
      </InputGroup>
      {input.length > 1 && (
        <>
          <Box
            mt={3}
            borderRadius="3px"
            overflow="auto"
            overflowY="auto"
            maxH="162px"
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
            <Center
              borderRadius="5px"
              maxH={6}
              bg={resultsBg}
              borderBottom={1}
              borderBottomColor="black"
            >
              <Box p={2} textAlign={"center"} fontSize="sm">
                <Text as="samp">Cryptocurrencies</Text>
              </Box>
            </Center>
            {filteredData.map((coin, index) => {
              return (
                <Box key={index}>
                  <Link
                    href={`/coins/${coin.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      p={2}
                      px={3}
                      _hover={{
                        background: hover,
                      }}
                    >
                      {coin.name}
                    </Box>
                  </Link>
                </Box>
              );
            })}
          </Box>
          <Center
            borderRadius="5px"
            maxH={7}
            bg={resultsKBD}
            position="relative"
          >
            <Box p={2} textAlign={"center"} fontSize="sm">
              <Text as="samp">
                <Kbd>enter</Kbd> to search for "{input}" news
              </Text>
            </Box>
          </Center>
        </>
      )}
    </Box>
  );
};

export default SearchBar;
