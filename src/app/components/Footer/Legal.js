import { Box, Text, Stack, Link } from "@chakra-ui/layout";
import React from "react";

function Legal() {
  return (
    <Box>
      <Text mb={2} fontWeight="semibold">
        LEGAL
      </Text>
      <Stack>
        <Link href="#">Privacy</Link>
        <Link href="#">Terms</Link>
      </Stack>
    </Box>
  );
}

export default Legal;
