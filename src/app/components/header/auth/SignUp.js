import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Input,
  useDisclosure,
  Text,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Login from "./Login";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
import { useToast } from "@chakra-ui/react";

const SignUp = () => {
  const [signUpEmail, setSignUpEmail] = useState(null);
  const [signUpPassword, setSignUpPassword] = useState(null);
  const [signUpPasswordConfirm, setSignUpPasswordConfirm] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const toast = useToast();

  const register = async () => {
    if (signUpEmail === null || signUpPassword === null) {
      toast({
        title: "Credentials not valid",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (signUpPassword === signUpPasswordConfirm) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          signUpEmail,
          signUpPassword
        );
        onClose();
        toast({
          title: "User created successfuly!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Email is invalid or already in use",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Passwords do not match!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  const isError = signUpPasswordConfirm === signUpPassword;
  return (
    <>
      <Button onClick={onOpen} size={"sm"} mx={5}>
        Sign Up
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        initialFocusRef={emailRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create an Account!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                ref={emailRef}
                id="email"
                type="email"
                isRequired
                mb={3}
                onChange={(e) => {
                  setSignUpEmail(e.target.value);
                }}
              />
              <FormLabel htmlFor="Password">Password</FormLabel>
              <Input
                ref={passwordRef}
                id="Password"
                type="Password"
                isRequired
                mb={3}
                onChange={(e) => {
                  setSignUpPassword(e.target.value);
                }}
              />
              <FormHelperText my={1} mb={2}>
                Passwords must be at least 6 characters.
              </FormHelperText>
              <FormLabel htmlFor="ConfirmPassword">Confirm Password</FormLabel>
              <Input
                ref={passwordConfirmRef}
                id="ConfirmPassword"
                type="Password"
                isRequired
                mb={3}
                onChange={(e) => {
                  setSignUpPasswordConfirm(e.target.value);
                }}
              />
              {!isError ? (
                <FormHelperText>Passwords do not match!</FormHelperText>
              ) : null}
            </FormControl>
            <Button
              colorScheme="teal"
              w="100%"
              mt={5}
              mr={3}
              onClick={register}
            >
              Sign Up
            </Button>
            <HStack>
              <Text my={3}>Already have an account?</Text>
              <Spacer />
              <Login onClick={onClose} />
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default SignUp;
