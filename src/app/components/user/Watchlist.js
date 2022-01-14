import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import CoinTable from "../coins/coinTable/CoinTable";
import { useAuth } from "../contexts/AuthContext";

const Watchlist = () => {
  const { currentUser, users } = useAuth();

  //const list = users?.watchlist;

  return (
    <>
      <Box
        mr={{ md: 0, lg: 20 }}
        my={5}
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading>Watchlist {users?.email}</Heading>
      </Box>
      <Box mr={{ md: 0, lg: 20 }}>
        {users ? <CoinTable watchlist={users} /> : null}
      </Box>
    </>
  );
};

export default Watchlist;
