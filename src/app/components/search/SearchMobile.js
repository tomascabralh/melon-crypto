import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  IconButton,
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
          <DrawerBody mt={8}>
            <SearchBar
              placeholder="What are you looking for ?"
              h={"70vh"}
              onClose={onClose}
            />
          </DrawerBody>
          <Button onClick={onClose}>Cancel</Button>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SearchMobile;
