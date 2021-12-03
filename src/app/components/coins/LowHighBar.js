import { Box } from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";
import React from "react";

const LowHighBar = ({ coin }) => {
  const low = parseFloat(coin.market_data.low_24h.usd);
  const high = parseFloat(coin.market_data.high_24h.usd);
  const range = high - low;
  const progress =
    ((parseFloat(coin.market_data.current_price.usd) - low) * 100) / range;

  return (
    <Box>
      {progress !== undefined ? (
        <Progress mt={3} size="sm" value={progress} isAnimated />
      ) : (
        <Progress mt={3} size="sm" isIndeterminate />
      )}
    </Box>
  );
};

export default LowHighBar;
