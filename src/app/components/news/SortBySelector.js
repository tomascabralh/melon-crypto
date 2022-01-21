import React from "react";
import { Box, Select } from "@chakra-ui/react";

const SortBySelector = ({ fetchDataFromSortBySelector }) => {
  const sortOptions = [
    { label: "Relevancy", value: "relevancy" },
    { label: "Popularity", value: "popularity" },
    { label: "Date", value: "publishedAt" },
  ];

  const options = sortOptions.map((sort) => {
    return (
      <option key={sort.value} value={sort.value}>
        {sort.label}
      </option>
    );
  });
  return (
    <Box>
      <Select
        w={120}
        onChange={(e) => {
          fetchDataFromSortBySelector(e.target.value);
        }}
      >
        {options}
      </Select>
    </Box>
  );
};

export default SortBySelector;
