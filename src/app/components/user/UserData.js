import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  Center,
  AspectRatio,
  Checkbox,
} from "@chakra-ui/react";
import Avatar from "../../../images/user/DefaultAvatar.png";
import { useAuth } from "../contexts/AuthContext";

const UserData = (props) => {
  const { currentUser } = useAuth();

  const clickEvent = () => {
    props.changeToUpdate(true);
  };

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
      <Checkbox mb={10} isDisabled defaultIsChecked>
        <Heading size={"md"}>Suscribed To Newsletter </Heading>
      </Checkbox>
      <Button
        colorScheme="blue"
        variant="solid"
        w={"100%"}
        mb={10}
        onClick={clickEvent}
      >
        Update Settings
      </Button>
    </Box>
  );
};

export default UserData;
