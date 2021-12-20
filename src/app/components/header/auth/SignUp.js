import {
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
} from "@chakra-ui/react";
import React, { useRef } from "react";

const SignUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
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
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create an Account!</ModalHeader>
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
              />
              <FormLabel htmlFor="Password">Password</FormLabel>
              <Input id="Password" type="Password" isRequired mb={3} />
              <FormHelperText my={1} mb={2}>
                Passwords must be at least 6 characters.
              </FormHelperText>
              <FormLabel htmlFor="ConfirmPassword">Confirm Password</FormLabel>
              <Input id="ConfirmPassword" type="Password" isRequired mb={3} />
            </FormControl>
            <Button colorScheme="teal" w="100%" mt={5} mr={3} onClick={onClose}>
              Sign Up
            </Button>
            <Text my={3}>
              Already have an account?{" "}
              <Link href="#" textColor={"teal"}>
                Log in here!
              </Link>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default SignUp;
