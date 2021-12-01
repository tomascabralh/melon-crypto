import { Link } from "@chakra-ui/layout";
import { Tr, Td } from "@chakra-ui/react";
import React from "react";
import { Currencies } from "../../../data/CoinTableRowTEST";

const CoinTableRow = () => {
  const currencies = Currencies;

  return (
    <>
      {currencies.map((coins) => {
        return (
          <Tr
            _hover={{
              background: "green.100",
            }}
          >
            <Td>{coins.top}</Td>
            <Td>
              <Link href={`/coin/${coins.id}`}>{coins.coin}</Link>
            </Td>
            <Td>{coins.price}</Td>
            {coins.dayvar >= 0 ? (
              <Td color="green">{coins.dayvar}</Td>
            ) : (
              <Td color="red">{coins.dayvar}</Td>
            )}
            {coins.weekvar >= 0 ? (
              <Td color="green">{coins.weekvar}</Td>
            ) : (
              <Td color="red">{coins.weekvar}</Td>
            )}
            <Td>{coins.marketcap}</Td>
          </Tr>
        );
      })}
    </>
  );
};

export default CoinTableRow;
