import { Box, Center, Stack } from "@chakra-ui/layout";
import React from "react";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <Box as="footer" role="contentinfo" mx="auto">
      <Box>
        <Stack
          direction="row"
          align="center"
          justify="space-between"
          px={{
            base: "4",
            md: "24",
          }}
          h="160px"
          bgColor="#9AE6B4"
        >
          <SocialMedia />
          <Box>🍈 </Box>
        </Stack>
        <Center bgColor="#48BB78" w="100%" h="40px" fontSize="lg">
          <Box mt="25px">© 2021 Melon Crypto</Box>
        </Center>
        <Center bgColor="#48BB78" w="100%" h="40px" fontSize="sm">
          Todos los derechos reservados
        </Center>
      </Box>
    </Box>
  );
}

export default Footer;
