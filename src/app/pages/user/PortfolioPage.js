import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Portfolio from "../../components/user/Portfolio";

const PortfolioPage = () => {
  return (
    <>
      <Box
        mx={{ base: 5, sm: 5, md: 5, lg: 20 }}
        my={5}
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading>Portfolio</Heading>
      </Box>
      <Box>
        <Portfolio />
      </Box>
    </>
  );
};

export default PortfolioPage;
