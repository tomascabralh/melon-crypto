import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  IconButton,
  Box,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";
import SearchBar from "./SearchBar";

const SearchMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        size="sm"
        icon={<ImSearch fontSize="22px" />}
        mr={2}
        mt={1}
        variant="link"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Box mr={3}>
            <DrawerCloseButton />
          </Box>
          <DrawerBody mt={12} mx={8}>
            <SearchBar
              placeholder="What are you looking for ?"
              h={"60vh"}
              onClose={onClose}
              lenght={1}
            />
            <Box mt={30}>
              <Button onClick={onClose} w={"100%"}>
                Cancel
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SearchMobile;
