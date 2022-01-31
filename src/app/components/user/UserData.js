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
import SpinnerUI from "../UI/Spinner";

const UserData = (props) => {
  const { users } = useAuth();

  const clickEvent = () => {
    props.changeToUpdate(true);
  };

  return (
    <>
      {!users ? (
        <SpinnerUI />
      ) : (
        <Box mx={{ base: 5, sm: 20 }}>
          <Center my={10}>
            <AspectRatio w={{ base: 250, sm: 300 }} ratio={19 / 21}>
              <Image
                src={users?.photoURL}
                alt={users?.uid}
                fallbackSrc={Avatar}
                borderRadius="full"
                boxSize={"150px"}
              />
            </AspectRatio>
          </Center>
          <Heading size={"md"} my={3}>
            Username:
          </Heading>
          <Text mb={10}>
            {users?.username ? users.username : "----------------"}
          </Text>
          <Heading size={"md"} my={3}>
            Email:
          </Heading>
          <Text mb={10}>{users?.email}</Text>
          <Checkbox
            mb={10}
            isDisabled
            isChecked={users?.subscribedtonewsletter}
          >
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
      )}
    </>
  );
};

export default UserData;
