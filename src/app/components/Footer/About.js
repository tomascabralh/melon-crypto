import { Box, Text, Stack, Link } from "@chakra-ui/layout";
import React from "react";

const About = () => {
  return (
    <Box pl={2}>
      <Text mb={4}  fontWeight="semibold">
        ABOUT
      </Text>
      <Stack>
        <Link href="#">About Us</Link>
        <Link href="#">Team</Link>
        <Link href="#">FAQ</Link>
      </Stack>
    </Box>
  );
}

export default About;
