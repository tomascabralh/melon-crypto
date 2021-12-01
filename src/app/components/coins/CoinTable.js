import { Box } from "@chakra-ui/layout";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import React from "react";
import CoinTableRow from "./CoinTableRow";

const CoinTable = () => {
  return (
    <Box mt="40px" mx="100px" bgColor="#9AE6B4" borderRadius="5px">
      <Table size="lg">
        <Thead>
          <Tr>
            <Th>Top</Th>
            <Th>Cryptocurrency</Th>
            <Th>Price</Th>
            <Th>24h %</Th>
            <Th>7d %</Th>
            <Th>30d %</Th>
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
