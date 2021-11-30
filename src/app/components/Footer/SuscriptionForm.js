import React from "react";
import { Box, Text, Stack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";

function Suscription() {
  return (
    <Box pl="120px">
      <Text mb={2} fontWeight="semibold">
        SUSCRIBE TO OUR NEWSLETTER
      </Text>
      <Text mb={2} fontSize="sm" maxWidth={360}>
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
