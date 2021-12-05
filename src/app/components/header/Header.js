import React from "react";
import SearchBar from "../search/SearchBar";
import { names } from "../../../data/NombresTest";
import { Box, Flex, Text, Link, Spacer } from "@chakra-ui/layout";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <Box h="54" w="100%">
      <Box
        py={2}
        px={4}
        bgColor="#9AE6B4"
        maxH={58}
        justify="center"
        whiteSpace="nowrap"
      >
        <Flex marginRight={4} marginY={2}>
          <Box width="200px" marginRight={8}>
            <Link href="/">
              <Text>🍈 Melon Crypto</Text>
            </Link>
          </Box>
          <HeaderMenu
            menuItems={[
              {
                name: "Cryptos",
                link: "/",
              },
              { name: "NFT", link: "/nfts" },
              { name: "News", link: "/news" },
            ]}
          />
          <Spacer />
          <Box right marginRight={10} w="500px">
            <SearchBar data={names} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
