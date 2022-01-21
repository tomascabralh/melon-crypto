import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Center,
  Box,
  useColorModeValue,
  Heading,
  Button,
  useToast,
} from "@chakra-ui/react";
import { auth } from "../../../firebase";
import { confirmPasswordReset } from "firebase/auth";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

const PasswordResetPage = () => {
  const [newPassword, setNewPassword] = useState(null);
  const [newPasswordConfirm, setNewPasswordConfirm] = useState(null);

  const bg = useColorModeValue("white", "gray.700");
  const toast = useToast();

  const query = useQuery();
  const oobCode = query.get("oobCode");

  const PasswordReset = async () => {
    try {
      confirmPasswordReset(auth, oobCode, newPassword);
      toast({
        title: "Password updated successfuly!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: error.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const isError = newPassword === newPasswordConfirm;
  return (
    <>
      <Center py={20} pb={20}>
        <Box
          maxW={"445px"}
          w="100%"
          boxShadow={"lg"}
          rounded={"lg"}
          p={6}
          overflow={"hidden"}
          maxHeight="500px"
          minHeight="500px"
          bg={bg}
        >
          <Heading mt={5} mb={10} textAlign={"center"}>
            Change Password
          </Heading>
          <FormControl>
            <FormLabel htmlFor="Password">New Password</FormLabel>
            <Input
              id="Password"
              type="Password"
              isRequired
              mb={3}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
            <FormHelperText my={1} mb={5}>
              Passwords must be at least 6 characters.
            </FormHelperText>
            <FormLabel htmlFor="ConfirmPassword">
              Confirm New Password
            </FormLabel>
            <Input
              id="ConfirmNewPassword"
              type="Password"
              isRequired
              mb={3}
              onChange={(e) => {
                setNewPasswordConfirm(e.target.value);
              }}
            />
            {!isError ? (
              <FormHelperText>Passwords do not match!</FormHelperText>
            ) : null}
          </FormControl>
          <Button
            colorScheme="teal"
            w="100%"
            mt={10}
            mr={3}
            type="submit"
            onClick={PasswordReset}
          >
            Update Password
          </Button>
        </Box>
      </Center>
    </>
  );
};

export default PasswordResetPage;
