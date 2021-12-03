import React from "react";
import { Box, Center } from "@chakra-ui/layout";

const Copyright = () => {
  return (
    <Box bgColor="#48BB78" w="100%" h="80px">
      <Center fontSize="lg">
        <Box mt="15px" fontWeight="semibold">
          © 2021 Melon Crypto.
        </Box>
      </Center>
      <Center fontSize="sm">All rights reserved</Center>
    </Box>
  );
};

export default Copyright;
