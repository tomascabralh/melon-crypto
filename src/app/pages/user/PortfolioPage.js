import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Portfolio from "../../components/user/Portfolio";

const PortfolioPage = () => {
  return (
    <>
      <Box
        mx={{ md: 0, lg: 20 }}
        my={5}
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading>Portfolio (Work in progress)</Heading>
      </Box>
      <Box h={550} mx={{ md: 0, lg: 20 }}>
        <Portfolio />
      </Box>
    </>
  );
};

export default PortfolioPage;
