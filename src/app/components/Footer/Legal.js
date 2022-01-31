import { Box, Text, Stack, Link, Flex } from "@chakra-ui/layout";
import React from "react";

const Legal = () => {
  return (
    <Box ml={20}>
      <Text mb={4} paddingRight="10px" fontWeight="semibold">
        LEGAL
      </Text>
      <Stack>
        <Flex>
          <Link href="/privacy" style={{ textDecoration: "none" }}>
            Privacy
          </Link>
        </Flex>
        <Flex>
          <Link href="/terms" style={{ textDecoration: "none" }}>
            Terms
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Legal;
