import React from "react";
import { Box, Center } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Copyright = () => {
  const bgCopyright = useColorModeValue("green.400", "green.900");

  return (
    <Box bgColor={bgCopyright} w="100%" h="80px">
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
