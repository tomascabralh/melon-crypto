import React from "react";
import { Box, Text, Heading } from "@chakra-ui/layout";

const About = ({ coin }) => {
  return (
    <>
      <Box mx={{ md: 0, lg: 200 }} my={5} py={5}>
        <Heading
          borderBottom="1px"
          borderColor="gray.200"
          alignContent="right"
          my={5}
          py={5}
        >
          About {coin.name}
        </Heading>
        <Text>{coin.description?.en}</Text>
      </Box>
    </>
  );
};

export default About;
