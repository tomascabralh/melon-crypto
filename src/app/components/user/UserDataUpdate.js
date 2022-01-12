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
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../firebase";
import Avatar from "../../../images/user/DefaultAvatar.png";
import { useAuth } from "../contexts/AuthContext";

const UserDataUpdate = () => {
  const { currentUser } = useAuth();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState(currentUser?.displayName);
  const [photo, setPhoto] = useState();

  const toast = useToast();

  const update = async () => {
    console.log(username);

    await updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
    });
    toast({
      title: "Profile updated!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  useEffect(() => {
    setEmail(currentUser?.email);
    setPhoto(currentUser?.photoURL);
    setUsername(currentUser?.displayName);
  }, []);

  return (
    <Box mx={20}>
      <FormControl>
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
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Heading size={"md"} my={3}>
          Email:
        </Heading>
        <Input
          id="email"
          type="email"
          isRequired
          mb={10}
          value={currentUser?.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button
          colorScheme="blue"
          variant="solid"
          type="submit"
          w={"100%"}
          mb={5}
          onClick={update}
        >
          Confirm Update
        </Button>
      </FormControl>
      <Box mb={5} textAlign={"right"}>
        <Link>Change password here!</Link>
      </Box>
    </Box>
  );
};

export default UserDataUpdate;
