import {
  Box,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
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

const Login = () => {
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const initialRef = React.useRef();

  const login = async () => {
    if ("asd" === "asd") {
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
      console.log(auth.currentUser);
    } else {
      toast({
        title: "Username or password incorrect",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
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
            <Link href="#" textColor={"gray.500"}>
              Forgot password?
            </Link>
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
