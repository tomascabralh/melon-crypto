import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  IconButton,
  DrawerCloseButton,
  Box,
  VStack,
  HStack,
  Button,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderMenu from "../HeaderMenu";
import { useAuth } from "../../contexts/AuthContext";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import Darkmode from "../Darkmode";
import SocialMedia from "../../footer/SocialMedia";

const UserMenuMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { currentUser, logout } = useAuth();

  return (
    <>
      <IconButton
        onClick={onOpen}
        size="sm"
        icon={<GiHamburgerMenu fontSize="22px" />}
        mr={2}
        mt={1}
        variant="link"
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"full"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottom={"2px"} borderBottomColor={"gray.200"}>
            <Link href="/" style={{ textDecoration: "none" }}>
              🍈 Melon Crypto 🍈
            </Link>
            <DrawerCloseButton mt={2} />
          </DrawerHeader>

          <DrawerBody>
            <VStack
              borderBottom={"1px"}
              borderBottomColor={"gray.200"}
              w={"100%"}
              pb={5}
            >
              <Box>
                <HeaderMenu
                  menuItems={[
                    {
                      name: "Cryptos",
                      link: "/",
                    },
                    { name: "News", link: "/news" },
                  ]}
                  fontS={"xl"}
                  mt={5}
                  base={"block"}
                />
              </Box>
            </VStack>
            {currentUser ? (
              <>
                <VStack
                  borderBottom={"1px"}
                  borderBottomColor={"gray.200"}
                  w={"100%"}
                  pb={5}
                >
                  <Box>
                    <HeaderMenu
                      menuItems={[
                        {
                          name: "Profile",
                          link: "/profile",
                          update: false,
                        },
                        { name: "Portfolio", link: "/user/portfolio" },
                        {
                          name: "Account Settings",
                          link: "/profile",
                          update: true,
                        },
                      ]}
                      fontS={"xl"}
                      mt={5}
                    />
                  </Box>
                </VStack>
              </>
            ) : null}

            <VStack mt={25}>
              <Spacer />
              <HStack>
                {!currentUser ? (
                  <>
                    <Login click={onClose} />
                    <SignUp click={onClose} />
                  </>
                ) : (
                  <Button onClick={logout}>Logout</Button>
                )}
                <Spacer />
                <Darkmode />
              </HStack>
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <SocialMedia base={"repeat(4, 1fr)"} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default UserMenuMobile;
