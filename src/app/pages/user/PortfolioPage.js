import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../components/contexts/AuthContext";

const PortfolioPage = () => {
  const { currentUser } = useAuth();
  return (
    <Box>
      <Heading>This is {currentUser?.email} Portfolio.</Heading>
    </Box>
  );
};

export default PortfolioPage;
