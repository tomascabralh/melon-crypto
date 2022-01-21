import {
  Link,
  Text,
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
} from "@chakra-ui/react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../../firebase";
import React, { useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const initialRef = useRef();

  const sendEmail = async () => {
    await sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/login",
    })
      .then((res) => {
        toast({
          title: "Email sent successfully!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Email does not exists",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });

    onClose();
  };

  return (
    <>
      <Link onClick={onOpen} size={"sm"}>
        Forgot Password?
      </Link>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Forgot password?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={5}>
              Enter your email below, you will receive an email with
              instructions on how to reset your password in a few minutes.
            </Text>
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                ref={initialRef}
                id="email"
                type="email"
                isRequired
                mb={3}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
            <Button
              colorScheme="teal"
              w="100%"
              my={5}
              mr={3}
              onClick={sendEmail}
            >
              Send Email
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ForgotPassword;
