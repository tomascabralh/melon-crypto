import { Box } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React from "react";

const TimeSelector = ({ fetchDataFromTimeSelector }) => {
  const daysrange = [
    {
      label: "24 Hours",
      value: 1,
    },
    {
      label: "7 Days",
      value: 7,
    },
    {
      label: "30 Days",
      value: 30,
    },
    {
      label: "3 Months",
      value: 90,
    },
    {
      label: "1 Year",
      value: 365,
    },
  ];

  const options = daysrange.map((day) => {
    return (
      <option key={day.value} value={day.value}>
        {day.label}
      </option>
    );
  });

  return (
    <Box>
      <Select
        onChange={(e) => {
          fetchDataFromTimeSelector(e.target.value);
        }}
      >
        {options}
      </Select>
    </Box>
  );
};

export default TimeSelector;
