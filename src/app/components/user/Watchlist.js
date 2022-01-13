import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Watchlist = () => {
  return (
    <>
      <Box
        mr={{ md: 0, lg: 20 }}
        my={5}
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading>Watchlist</Heading>
      </Box>
    </>
  );
};

export default Watchlist;
