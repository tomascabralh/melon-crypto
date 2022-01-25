import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import CoinTable from "../coins/coinTable/CoinTable";
import { useAuth } from "../contexts/AuthContext";

const Watchlist = () => {
  const { users } = useAuth();

  return (
    <>
      <Box
        mx={{ base: 5, sm: 5, md: 5, lg: 0 }}
        mr={{ md: 5, lg: 20 }}
        my={5}
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading>Watchlist</Heading>
      </Box>
      <Box mx={{ base: 5, sm: 5, md: 5, lg: 0 }} mr={{ md: 5, lg: 20 }}>
        {users ? <CoinTable watchlist={users} /> : null}
      </Box>
    </>
  );
};

export default Watchlist;
