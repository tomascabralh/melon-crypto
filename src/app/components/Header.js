import { Input } from "@chakra-ui/input";
import { Box, Flex, Text, Link } from "@chakra-ui/layout";
import React from "react";

function Header() {
  return (
    <Box h="54" pos="fixed" w="100%">
      <Box
        py={{ base: 2 }}
        px={{ base: 4 }}
        bgColor="#9AE6B4"
        borderBottom="2px"
        borderColor="#48BB78"
        borderBottomStartRadius="md"
        maxH="58"
        justify="center"
        whiteSpace="nowrap"
      >
        <Flex me={4} mt={2} mb={2}>
          <Box w="200px" me={8}>
            <Link href="/">
              <Text>🍈 Melon Crypto</Text>
            </Link>
          </Box>
          <Box me={6}>
            <Link>
              <Text textAlign="center">Cryptos</Text>
            </Link>
          </Box>
          <Box me={6}>
            <Link>
              <Text>NFTs</Text>
            </Link>
          </Box>
          <Box me={6}>
            <Link>
              <Text>News</Text>
            </Link>
          </Box>
          <Box w="100%"></Box>
          <Box right me={10} w="500px">
            <Input size="sm" variant="flushed" placeholder="Search . . ." />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
