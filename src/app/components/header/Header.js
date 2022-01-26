import React from "react";
import SearchBar from "../search/SearchBar";
import { names } from "../../../data/NombresTest";
import { Box, Flex, Text, Link, Spacer } from "@chakra-ui/layout";
import HeaderMenu from "./HeaderMenu";
import { useColorModeValue } from "@chakra-ui/color-mode";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import UserMenu from "./user/UserMenu";
import { useAuth } from "../contexts/AuthContext";
import SearchMobile from "../search/SearchMobile";
import UserMenuMobile from "./user/UserMenuMobile";
import Darkmode from "./Darkmode";

function Header() {
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
            mx={{ sm: 5, md: 5, lg: 10 }}
            w="500px"
            display={{ base: "none", sm: "block", md: "block" }}
          >
            <SearchBar data={names} />
          </Box>
          <Box
            mx={{ sm: 5, md: 5, lg: 10 }}
            display={{ base: "block", sm: "none", md: "none" }}
          >
            <SearchMobile />
          </Box>
          <Box mt={1} display={{ base: "none", sm: "block", md: "block" }}>
            <Darkmode />
            {!currentUser ? (
              <>
                <Login /> <SignUp />
              </>
            ) : (
              <UserMenu />
            )}
          </Box>
          <Box mt={1} display={{ base: "block", sm: "none", md: "none" }}>
            <UserMenuMobile />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
