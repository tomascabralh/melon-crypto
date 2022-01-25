import React from "react";
import SearchBar from "../search/SearchBar";
import { names } from "../../../data/NombresTest";
import { Box, Flex, Text, Link, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import HeaderMenu from "./HeaderMenu";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import UserMenu from "./user/UserMenu";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#9AE6B4", "green.700");
  const color = useColorModeValue("black", "gray.50");

  const { currentUser } = useAuth();

  return (
    <Box h="54" w="100%">
      <Box
        py={2}
        px={4}
        bgColor={bg}
        maxH="54px"
        justify="center"
        whiteSpace="nowrap"
        color={color}
      >
        <Flex marginRight={{ sm: 0, md: 2, lg: 4 }} marginY={2}>
          <Box
            width="200px"
            marginRight={8}
            display={{ base: "none", md: "block" }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Text fontWeight="500">🍈 Melon Crypto</Text>
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
          <Box
            right
            mx={{ sm: 5, md: 5, lg: 10 }}
            w="500px"
            display={{ base: "none", sm: "block", md: "block" }}
          >
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
            mr={{ base: 2, sm: 2, md: 2, lg: 5 }}
            onClick={toggleColorMode}
          />
          {!currentUser ? <Login /> : null}
          {!currentUser ? <SignUp /> : <UserMenu />}
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
