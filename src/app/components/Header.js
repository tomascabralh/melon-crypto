import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";

function Header() {
  return (
    <Box>
      <Flex
        py={{ base: 2 }}
        px={{ base: 4 }}
        bgColor="#9AE6B4"
        borderBottom="2px"
        borderColor="#48BB78"
        borderBottomStartRadius="md"
      >
        <Text>NAVBAR</Text>
      </Flex>
    </Box>
  );
}

export default Header;
