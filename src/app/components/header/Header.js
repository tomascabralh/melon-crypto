import React from "react";
import SearchBar from "../search/SearchBar";
import { names } from "../../../data/NombresTest";
import { Box, Flex, Text, Link, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import HeaderMenu from "./HeaderMenu";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#9AE6B4", "green.700");
  const color = useColorModeValue("black", "gray.50");

  return (
    <Box h="54" w="100%">
      <Box
        py={2}
        px={4}
        bgColor={bg}
        maxH={58}
        justify="center"
        whiteSpace="nowrap"
        color={color}
      >
        <Flex marginRight={4} marginY={2}>
          <Box width="200px" marginRight={8}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Text>🍈 Melon Crypto</Text>
            </Link>
          </Box>
          <HeaderMenu
            menuItems={[
              {
                name: "Cryptos",
                link: "/",
              },
              { name: "News", link: "/news" },
            ]}
          />
          <Spacer />
          <Box right marginRight={10} w="500px">
            <SearchBar data={names} />
          </Box>
          <IconButton
            icon={
              colorMode === "light" ? (
                <FaMoon fontSize="20px" />
              ) : (
                <FaSun fontSize="20px" />
              )
            }
            size="sm"
            onClick={toggleColorMode}
          />
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
