import { Box } from "@chakra-ui/layout";
import { Tr, Th, Td } from "@chakra-ui/react";
import React from "react";

const CoinTableRow = () => {
  const CryptoData = () => {
    return (
      <Tr>
        <Td>1</Td>
        <Td>Bitcoin</Td>
        <Td>6346346</Td>
        <Td>3</Td>
        <Td>2</Td>
        <Td>7</Td>
      </Tr>
    );
  };

  return <>{CryptoData}</>;
};

export default CoinTableRow;
