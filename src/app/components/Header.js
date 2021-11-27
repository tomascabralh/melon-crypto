import { Input } from "@chakra-ui/input";
import { Box, Flex, Text, Link} from "@chakra-ui/layout";
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
        <Flex  me={4} mt={2}>
        <Box me={10}>
        <Link href='/'><Text>🍈 Melon Crypto</Text></Link>
        </Box>
        <Box me={6}>
          <Link><Text>Cryptos</Text></Link>
        </Box>
        <Box me={6}>
          <Link><Text>NFTs</Text></Link>
        </Box>
        <Box me={700}>
          <Link><Text>News</Text></Link>
        </Box>
        <Box right  me={6}>
          <Input size="xs" variant="flushed" placeholder="Search . . ."/>
        </Box>
        </Flex>

      </Flex>
    </Box>
  );
}

export default Header;
