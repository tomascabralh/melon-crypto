import { Flex } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React from "react";

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
    <Flex>
      <Select
        onChange={(e) => {
          fetchDataFromSortBySelector(e.target.value);
        }}
      >
        {options}
      </Select>
    </Flex>
  );
};

export default SortBySelector;
