import React from "react";
import { Box, Text, Stack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";

const Suscription = () => {
  return (
    <Box ml="120px" pb='10px' minW='100px' display={{ base: "none", md: "none", lg:'block' }}>
      <Text mb={2} fontWeight="semibold">
        SUSCRIBE TO OUR NEWSLETTER
      </Text>
      <Text mb={2} fontSize="sm" maxWidth={360} display={{ base: "none", md: "none", xl:'block' }}>
        Get crypto analysis, news and updates right to your inbox! Sign up here
        so you don't miss a single newsletter.
      </Text>
      <Stack>
        <Input
          size="sm"
          background="white"
          rounded="md"
          px={2}
          variant="flushed"
          placeholder="Enter your email"
          type="email"
          maxWidth={360}
        />
        <Button colorScheme="blue" variant="solid" maxWidth={120}>
          SEND
        </Button>
      </Stack>
    </Box>
  );
}

export default Suscription;
