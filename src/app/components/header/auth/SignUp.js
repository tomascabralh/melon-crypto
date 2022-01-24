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
  FormHelperText,
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
import { getDatabase, ref, set } from "firebase/database";
import Login from "./Login";
import { AiOutlineEye } from "react-icons/ai";

const SignUp = () => {
  const [signUpEmail, setSignUpEmail] = useState(null);
  const [signUpPassword, setSignUpPassword] = useState(null);
  const [signUpPasswordConfirm, setSignUpPasswordConfirm] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const toast = useToast();

  function watchlistObject() {
    let object = {};
    for (var i = 1; i <= 50; i++) {
      object[`n${i}`] = false;
    }
    return object;
  }

  const register = async () => {
    if (
      (signUpEmail === null || signUpPassword === null) &&
      (signUpPasswordConfirm === "" || signUpPassword === "")
    ) {
      toast({
        title: "Credentials not valid",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (signUpPassword === signUpPasswordConfirm) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          signUpEmail,
          signUpPassword
        ).then((res) => {
          set(ref(getDatabase(), "users/" + res.user.uid), {
            email: res.user.email,
            username: "",
            photoURL: "",
            subscribedtonewsletter: true,
          });
          set(
            ref(getDatabase(), `users/${res.user.uid}/watchlist`),
            watchlistObject()
          );
        });
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
      <Button
        onClick={onOpen}
        size={"sm"}
        mx={{ base: 2, sm: 2, md: 2, lg: 5 }}
      >
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
              <InputGroup>
                <Input
                  ref={passwordRef}
                  id="Password"
                  type={showPass1 ? "text" : "password"}
                  isRequired
                  mb={3}
                  onChange={(e) => {
                    setSignUpPassword(e.target.value);
                  }}
                />
                <InputRightElement width="1.5rem">
                  <IconButton
                    size="sm"
                    icon={<AiOutlineEye />}
                    fontSize={20}
                    mr={4}
                    onClick={() => {
                      setShowPass1(!showPass1);
                    }}
                  />
                </InputRightElement>
              </InputGroup>
              <FormHelperText my={1} mb={2}>
                Passwords must be at least 6 characters.
              </FormHelperText>
              <FormLabel htmlFor="ConfirmPassword">Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  ref={passwordConfirmRef}
                  id="ConfirmPassword"
                  type={showPass2 ? "text" : "password"}
                  isRequired
                  mb={3}
                  onChange={(e) => {
                    setSignUpPasswordConfirm(e.target.value);
                  }}
                />
                <InputRightElement width="1.5rem">
                  <IconButton
                    size="sm"
                    icon={<AiOutlineEye />}
                    fontSize={20}
                    mr={4}
                    onClick={() => {
                      setShowPass2(!showPass2);
                    }}
                  />
                </InputRightElement>
              </InputGroup>
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
