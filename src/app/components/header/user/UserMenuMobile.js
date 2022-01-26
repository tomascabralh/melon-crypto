import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  IconButton,
  DrawerFooter,
  DrawerCloseButton,
  Box,
  VStack,
  HStack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderMenu from "../HeaderMenu";
import { useAuth } from "../../contexts/AuthContext";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import Darkmode from "../Darkmode";

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
            🍈 Melon Crypto 🍈
            <DrawerCloseButton mt={2} />
          </DrawerHeader>

          <DrawerBody borderBottom={"2px"} borderBottomColor={"gray.200"}>
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
                />
              </Box>
            </VStack>
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
                    },
                    { name: "Portfolio", link: "/user/portfolio" },
                    { name: "Account Settings", link: "/profile" },
                  ]}
                  fontS={"xl"}
                  mt={5}
                />
              </Box>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <HStack>
              {!currentUser ? (
                <>
                  <Login />
                  <SignUp />
                </>
              ) : (
                <Button onClick={logout}>Logout</Button>
              )}
              <Spacer />
              <Darkmode />
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default UserMenuMobile;
