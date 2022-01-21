import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Image,
  AspectRatio,
  Button,
  Center,
  FormControl,
  Input,
  Link,
  Checkbox,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import { update, ref, getDatabase } from "firebase/database";
import Avatar from "../../../images/user/DefaultAvatar.png";
import SpinnerUI from "../UI/Spinner";

const UserDataUpdate = (props) => {
  const { currentUser, users } = useAuth();
  const [Username, setUsername] = useState(users?.username);
  const [photo, setPhoto] = useState(users?.photoURL);
  const [checkbox, setCheckbox] = useState(users?.subscribedtonewsletter);

  const toast = useToast();

  const Update = async () => {
    await update(ref(getDatabase(), "users/" + currentUser.uid), {
      username: Username,
      photoURL: photo,
      subscribedtonewsletter: checkbox,
    });

    toast({
      title: "Profile updated!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    props.changeToUpdate(false);
  };

  useEffect(() => {
    setPhoto(users?.photoURL);
    setUsername(users?.username);
    setCheckbox(users?.subscribedtonewsletter);
  }, [users]);

  return (
    <>
      {users ? (
        <Box mx={{ base: 5, sm: 20 }}>
          <FormControl>
            <Center my={10}>
              <AspectRatio w={{ base: 250, sm: 300 }} ratio={19 / 21}>
                <Image
                  src={users?.photoURL}
                  alt={users?.uid}
                  fallbackSrc={Avatar}
                  borderRadius="full"
                  boxSize="150px"
                />
              </AspectRatio>
            </Center>
            <Heading size={"md"} my={3}>
              Photo URL:
            </Heading>
            <Input
              id="photo"
              mb={10}
              value={photo}
              onChange={(e) => {
                setPhoto(e.target.value);
              }}
            />
            <Heading size={"md"} my={3}>
              Username:
            </Heading>
            <Input
              id="username"
              isRequired
              mb={10}
              value={Username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Heading size={"md"} my={3}>
              Email:
            </Heading>
            <Input
              isDisabled
              isRequired
              id="email"
              type="email"
              mb={10}
              value={users?.email}
            />
            <Checkbox
              mb={10}
              isChecked={checkbox}
              onChange={() => {
                if (checkbox === true) {
                  setCheckbox(false);
                } else {
                  setCheckbox(true);
                }
              }}
            >
              <Heading size={"md"}>Suscribed To Newsletter </Heading>
            </Checkbox>
            <Button
              colorScheme="blue"
              variant="solid"
              type="submit"
              w={"100%"}
              mb={5}
              onClick={Update}
            >
              Confirm Update
            </Button>
          </FormControl>
          <Box mb={5} textAlign={"right"}>
            <Link href="/profile/password-reset">Change password here!</Link>
          </Box>
        </Box>
      ) : (
        <SpinnerUI />
      )}
    </>
  );
};

export default UserDataUpdate;
