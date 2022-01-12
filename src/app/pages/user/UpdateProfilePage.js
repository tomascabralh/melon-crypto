import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../components/contexts/AuthContext";

const UpdateProfilePage = () => {
  const { currentUser } = useAuth();
  return (
    <Box>
      <Heading>This is {currentUser?.email} UpdateProfile page.</Heading>
    </Box>
  );
};

export default UpdateProfilePage;
