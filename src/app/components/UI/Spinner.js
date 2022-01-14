import { Center } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";

const SpinnerUI = () => {
  return (
    <Center w="100%" h="300px">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.200"
        size="xl"
      />
    </Center>
  );
};

export default SpinnerUI;
