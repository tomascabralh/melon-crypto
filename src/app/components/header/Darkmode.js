import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IconButton, useColorMode } from "@chakra-ui/react";

const Darkmode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton
        icon={
          colorMode === "light" ? (
            <FaMoon fontSize="22px" />
          ) : (
            <FaSun fontSize="22px" />
          )
        }
        size="sm"
        mr={{ base: 2, sm: 2, md: 2, lg: 5 }}
        onClick={toggleColorMode}
        variant="link"
      />
    </>
  );
};

export default Darkmode;
