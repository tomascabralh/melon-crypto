import React from "react";
import { Box, Text, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const NotFoundPage = () => {
  return (
    <Box position="relative" h={"66vh"}>
      <Box
        textAlign="center"
        py={10}
        px={6}
        position="absolute"
        top={100}
        right={0}
        left={0}
        bottom={0}
      >
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgColor="#48BB78"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page you're looking for does not exist
        </Text>

        <Button
          as="a"
          colorScheme="teal"
          bgColor="#48BB78"
          color="white"
          variant="solid"
          href="/"
        >
          Go to the Homepage
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
