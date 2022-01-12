import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  Center,
  AspectRatio,
} from "@chakra-ui/react";
import Avatar from "../../../images/user/DefaultAvatar.png";
import { useAuth } from "../contexts/AuthContext";

const UserData = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <Box mx={20}>
      <Center my={10}>
        <AspectRatio w={300} ratio={19 / 21}>
          <Image
            src={currentUser?.photoURL}
            alt={currentUser?.uid}
            fallbackSrc={Avatar}
            borderRadius="full"
            boxSize="150px"
          />
        </AspectRatio>
      </Center>
      <Heading size={"md"} my={3}>
        Username:
      </Heading>
      <Text mb={10}>
        {currentUser?.displayName
          ? currentUser.displayName
          : "----------------"}
      </Text>
      <Heading size={"md"} my={3}>
        Email:
      </Heading>
      <Text mb={10}>{currentUser?.email}</Text>
      <Button
        colorScheme="blue"
        variant="solid"
        w={"100%"}
        mb={10}
        onClick={"ogete"}
      >
        Update Settings
      </Button>
    </Box>
  );
};

export default UserData;
