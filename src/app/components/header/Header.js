import React from "react";
import SearchBar from "../search/SearchBar";
import {
  Box,
  Flex,
  Text,
  Link,
  Spacer,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import HeaderMenu from "./HeaderMenu";
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
        <Flex mr={{ sm: 0, md: 2, lg: 4 }} my={2}>
          <Box width="200px" mr={8}>
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
            base={"none"}
          />
          <Spacer />
          <Box
            mx={{ sm: 5, md: 5, lg: 10 }}
            w="500px"
            display={{ base: "none", sm: "block", md: "block" }}
          >
            <SearchBar lenght={1} />
          </Box>
          <Box
            mx={{ sm: 5, md: 5, lg: 10 }}
            display={{ base: "block", sm: "none", md: "none" }}
          >
            <SearchMobile />
          </Box>
          <Box display={{ base: "none", sm: "none", md: "block" }}>
            <HStack mb={2}>
              <Darkmode />
              {!currentUser ? (
                <>
                  <Login /> <SignUp />
                </>
              ) : (
                <UserMenu />
              )}
            </HStack>
          </Box>
          <Box display={{ base: "block", sm: "block", md: "none" }}>
            <UserMenuMobile />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
