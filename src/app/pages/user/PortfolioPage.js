import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import SpinnerUI from "../../components/UI/Spinner";

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
      <Box w="100%" h={550}>
        <SpinnerUI />
      </Box>
    </>
  );
};

export default PortfolioPage;
