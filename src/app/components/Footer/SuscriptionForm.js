import React from "react";
import { Box, Text, Stack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Suscription = () => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "gray.50");
  const toast = useToast();

  function Popup(e) {
    e.preventDefault();
    toast({
      title: "Thanks for joining our newsletter!",
      description: "This is just a success popup xd, u wont receive any emails",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    e.target.reset();
  }

  return (
    <Box
      ml="120px"
      pb="10px"
      minW="100px"
      display={{ base: "none", md: "none", lg: "block" }}
    >
      <Text mb={2} fontWeight="semibold">
        SUSCRIBE TO OUR NEWSLETTER
      </Text>
      <Text
        mb={2}
        fontSize="sm"
        maxWidth={360}
        display={{ base: "none", md: "none", xl: "block" }}
      >
        Get crypto analysis, news and updates right to your inbox! Sign up here
        so you don't miss a single newsletter.
      </Text>
      <Stack>
        <form onSubmit={Popup}>
          <Stack>
            <Input
              size="sm"
              background={bg}
              color={color}
              rounded="md"
              px={2}
              variant="flushed"
              placeholder="Enter your email"
              type="email"
              maxWidth={360}
              isRequired
            />
            <Button
              colorScheme="blue"
              variant="solid"
              maxWidth={120}
              type="submit"
            >
              SEND
            </Button>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

export default Suscription;
