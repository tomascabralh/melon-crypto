import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../components/contexts/AuthContext";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useParams();
  const { currentUser } = useAuth();

  return (
    <Box>
      <Heading>This is {currentUser?.email} profile.</Heading>
    </Box>
  );
};

export default ProfilePage;
