import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../components/contexts/AuthContext";

const PortfolioPage = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <Box
        mx={{ md: 0, lg: 20 }}
        my={5}
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading>Portfolio</Heading>
      </Box>
    </>
  );
};

export default PortfolioPage;
