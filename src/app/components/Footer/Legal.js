import { Box, Text, Stack, Link } from "@chakra-ui/layout";
import React from "react";

const Legal = () => {
  return (
    <Box>
      <Text mb={4} paddingRight="10px" fontWeight="semibold">
        LEGAL
      </Text>
      <Stack>
        <Link href="#">Privacy</Link>
        <Link href="#">Terms</Link>
      </Stack>
    </Box>
  );
};

export default Legal;
