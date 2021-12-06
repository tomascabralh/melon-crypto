import { Box, Text, Stack, Link } from "@chakra-ui/layout";
import React from "react";

const Legal = () => {
  return (
    <Box>
      <Text mb={4} paddingRight="10px" fontWeight="semibold">
        LEGAL
      </Text>
      <Stack>
        <Link href="/privacy" style={{ textDecoration: "none" }}>
          Privacy
        </Link>
        <Link href="/terms" style={{ textDecoration: "none" }}>
          Terms
        </Link>
      </Stack>
    </Box>
  );
};

export default Legal;
