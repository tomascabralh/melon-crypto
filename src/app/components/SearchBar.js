import { Box } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import React from "react";
import { useState } from "react";

function SearchBar(props) {
  const data = props.data;

  const [filteredData, setFilteredData] = useState([]);

  const filtering = (e) => {
    var searchWord = e.target.value;
    const newfilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newfilter);
  };
  return (
    <Box>
      <Input
        size="sm"
        variant="flushed"
        placeholder="Search . . ."
        onChange={filtering}
      />
      {filteredData != 0 && (
        <Box
          border="1px"
          borderColor="gray.200"
          bgColor="#9AE6B4"
          overflow="auto"
          overflowY="auto"
          maxH="162px"
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
          {filteredData.map((data, key) => {
            return (
              <Box
                p={2}
                _hover={{
                  background: "#C6F6D5",
                }}
                key={key}
              >
                {data.name}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}

export default SearchBar;
