import { Box } from "@chakra-ui/layout";
import React from "react";

const CoinDayVariation = ({ porcentageVar }) => {
  return (
    <Box>
      {porcentageVar >= 0 ? (
        <Box fontSize="sm" textColor="green">
          {`+${porcentageVar}%`}
        </Box>
      ) : (
        <Box fontSize="sm" textColor="red">
          {`${porcentageVar}%`}
        </Box>
      )}
    </Box>
  );
};

export default CoinDayVariation;
