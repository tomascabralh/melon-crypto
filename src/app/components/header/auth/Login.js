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

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
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
              />
              <FormLabel htmlFor="Password">Password</FormLabel>
              <Input id="Password" type="Password" isRequired mb={3} />
            </FormControl>
            <Link href="#" textColor={"gray.500"}>
              Forgot password?
            </Link>
            <Button colorScheme="teal" w="100%" mt={5} mr={3} onClick={onClose}>
              Log In
            </Button>
            <Text my={3}>
              Don't have an account yet?{" "}
              <Link href="#" textColor={"teal"}>
                Sign up for free here!
              </Link>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Login;
