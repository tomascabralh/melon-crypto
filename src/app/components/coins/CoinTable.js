import { Box } from "@chakra-ui/layout";
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
import React from "react";
import CoinTableRow from "./CoinTableRow";
import { useColorModeValue } from "@chakra-ui/color-mode";

const CoinTable = () => {
  const bg = useColorModeValue("#9AE6B4", "green.800");

  const titles = ["Top", "Coin", "Price (USD)", "24h %", "Market Cap"];

  return (
    <Box
      my={10}
      mx={{ md: 0, lg: 100, xl: 300 }}
      bgColor={bg}
      borderRadius="5px"
      overflow="auto"
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
      <Table size="lg">
        <Thead>
          <Tr>
            {titles.map((head) => {
              return <Th key={head}>{head}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          <CoinTableRow />
        </Tbody>
      </Table>
    </Box>
  );
};

export default CoinTable;
