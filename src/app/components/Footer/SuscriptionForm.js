import React, { useState } from "react";
import {
  useToast,
  Button,
  Input,
  Box,
  Text,
  Stack,
  useColorModeValue,
  FormControl,
} from "@chakra-ui/react";
import { getDatabase, ref, set } from "firebase/database";

const Suscription = () => {
  const [email, setEmail] = useState("");

  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "gray.50");
  const toast = useToast();

  function Popup() {
    if (email.includes("@") === true && email.includes(".") === true) {
      var keyName = email.replace("@", "---").replace(".", "-");

      set(ref(getDatabase(), "suscriptions/" + keyName), {
        email: email,
      });

      toast({
        title: "Thanks for joining our newsletter!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setEmail("");
    } else {
      toast({
        title: "You must enter an email address",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <Box
      pb="10px"
      minW="100px"
      display={{ base: "none", md: "block", lg: "block" }}
    >
      <Text mb={2} fontWeight="semibold">
        SUSCRIBE TO OUR NEWSLETTER
      </Text>
      <Text
        mb={2}
        fontSize="sm"
        maxWidth={360}
        display={{ base: "none", md: "block", xl: "block" }}
      >
        Get crypto analysis, news and updates right to your inbox! Sign up here
        so you don't miss a single newsletter.
      </Text>
      <Stack>
        <FormControl>
          <Input
            size="sm"
            background={bg}
            color={color}
            rounded="md"
            px={2}
            value={email}
            variant="flushed"
            placeholder="Enter your email"
            type="email"
            maxWidth={360}
            isRequired
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <Button
          colorScheme="blue"
          variant="solid"
          maxWidth={120}
          onClick={Popup}
        >
          SEND
        </Button>
      </Stack>
    </Box>
  );
};

export default Suscription;
