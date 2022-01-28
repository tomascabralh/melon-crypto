import React, { useEffect, useState } from "react";
import { Tr, Td, useColorModeValue, Box, Flex, Image } from "@chakra-ui/react";
import CoinDayVariation from "../../coins/coinPage/CoinDayVariation";

const PortfolioTableRow = (props) => {
  const [coins, setCoins] = useState([]);

  const bgColumn = useColorModeValue("#9AE6B4", "#22543D");

  const profitLoss = (coin) => {
    var current = coin.holdings * coin.price;
    return ((current - coin.spent) / coin.spent) * 100;
  };

  useEffect(() => {
    setCoins(props.coinObject);
  }, [props.coinObject]);
  return (
    <>
      {props.coinObject[0] !== undefined &&
        props?.coinObject.map((coin) => {
          console.log(coin);
          return (
            <Tr key={coin.coin}>
              <Td
                css={{
                  position: "sticky",
                  left: 0,
                  zindex: 2,
                  background: bgColumn,
                }}
              >
                <Flex>
                  <Image
                    src={coin.image}
                    boxSize={{
                      base: "30px",
                      sm: "30px",
                      md: "30px",
                      lg: "30px",
                    }}
                    alt={coin.name}
                  />
                  <Box ml={5}>{coin.coin}</Box>
                </Flex>
              </Td>
              <Td
                css={{
                  left: 0,
                  zindex: 0,
                }}
              >{`$ ${coin.price}`}</Td>
              <Td css={{ zindex: 0 }}>
                <CoinDayVariation porcentageVar={coin.price_change} />
              </Td>
              <Td css={{ zindex: 0 }}>
                {coin.holdings} {coin.symbol}{" "}
                {`($${coin.holdings * coin.price})`}
              </Td>
              <Td css={{ zindex: 0 }}>
                <CoinDayVariation porcentageVar={profitLoss(coin)} />
              </Td>
            </Tr>
          );
        })}
    </>
  );
};

export default PortfolioTableRow;
