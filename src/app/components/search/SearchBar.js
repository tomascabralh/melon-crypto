/* eslint-disable no-undef */
import { Box } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import React from "react";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";

const SearchBar = (props) => {
  const { data } = props;

  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");

  const onSearch = (e) => {
    var searchWord = e.target.value;
    const newfilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setInput(searchWord);
    setFilteredData(newfilter);
  };

  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "gray.50");

  return (
    <Box>
      <Input
        size="sm"
        background={bg}
        rounded="md"
        px={2}
        color={color}
        variant="flushed"
        placeholder="Search . . ."
        onChange={onSearch}
        onBlur={() => setInput("")}
      />
      {input.length > 1 && (
        <Box
          border="1px"
          bg="white"
          mt={2}
          borderColor="gray.200"
          overflow="auto"
          overflowY="auto"
          maxH="162px"
          sx={{
            "&::-webkit-scrollbar": {
              width: "8px",
              borderRadius: "8px",
              backgroundColor: rgba(0, 0, 0, 0.05),
            },

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: rgba(0, 0, 0, 0.05),
              borderRadius: "8px",
            },
          }}
        >
          {filteredData.map((data, index) => {
            return (
              <Box
                p={2}
                _hover={{
                  background: "#C6F6D5",
                }}
                key={index}
              >
                {data.name}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
