import { Box, Text, Stack, Link } from "@chakra-ui/layout";
import React from "react";

const About = () => {
  return (
    <Box pl={2}>
      <Text mb={4} paddingRight="10px" fontWeight="semibold">
        ABOUT
      </Text>
      <Stack>
        <Link href="#" style={{ textDecoration: "none" }}>
          About Us
        </Link>
        <Link href="#" style={{ textDecoration: "none" }}>
          Team
        </Link>
        <Link href="#" style={{ textDecoration: "none" }}>
          FAQ
        </Link>
      </Stack>
    </Box>
  );
};

export default About;
