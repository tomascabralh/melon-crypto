import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  useDisclosure,
  Text,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
import React, { useRef, useState } from "react";
import SignUp from "./SignUp";
import { useToast } from "@chakra-ui/react";
import PasswordReset from "./PasswordReset";

const Login = () => {
  const [logInEmail, setLogInEmail] = useState(null);
  const [logInPassword, setLogInPassword] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const initialRef = useRef();

  const login = async () => {
    if (logInEmail === null || logInPassword === null) {
      toast({
        title: "Credentials not valid",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          logInEmail,
          logInPassword
        );
        onClose();
        toast({
          title: "Logged in successfully!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Username or password incorrect",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        console.log(auth.currentUser);
      }
    }
  };

  return (
    <>
      <Button onClick={onOpen} size={"sm"}>
        Login
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                ref={initialRef}
                id="email"
                type="email"
                isRequired
                mb={3}
                onChange={(e) => {
                  setLogInEmail(e.target.value);
                }}
              />
              <FormLabel htmlFor="Password">Password</FormLabel>
              <Input
                id="Password"
                type="Password"
                isRequired
                mb={3}
                onChange={(e) => {
                  setLogInPassword(e.target.value);
                }}
              />
            </FormControl>
            <PasswordReset />
            <Button colorScheme="teal" w="100%" mt={5} mr={3} onClick={login}>
              Log In
            </Button>
            <HStack>
              <Text my={3}>Don't have an account yet?</Text>
              <Spacer />
              <SignUp />
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Login;
