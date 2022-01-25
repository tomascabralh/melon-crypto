import React, { useRef, useState } from "react";
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
  useToast,
  InputGroup,
  IconButton,
  InputRightElement,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import { AiOutlineEye } from "react-icons/ai";

const Login = () => {
  const [logInEmail, setLogInEmail] = useState(null);
  const [logInPassword, setLogInPassword] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

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
        await signInWithEmailAndPassword(auth, logInEmail, logInPassword);
        onClose();
        toast({
          title: "Logged in successfully!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/profile");
      } catch (error) {
        toast({
          title: "Username or password incorrect",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
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
              <InputGroup>
                <Input
                  id="Password"
                  type={show ? "text" : "password"}
                  isRequired
                  mb={3}
                  onChange={(e) => {
                    setLogInPassword(e.target.value);
                  }}
                />
                <InputRightElement width="1.5rem">
                  <IconButton
                    size="sm"
                    icon={<AiOutlineEye />}
                    fontSize={20}
                    mr={4}
                    onClick={() => {
                      setShow(!show);
                    }}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <ForgotPassword />
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
