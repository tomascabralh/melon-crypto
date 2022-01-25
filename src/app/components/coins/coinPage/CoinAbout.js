import React from "react";
import { Box, Text, Heading } from "@chakra-ui/layout";
import { removeTags } from "../../Functions";

const About = ({ coin }) => {
  return (
    <>
      <Box mx={{ base: 5, sm: 5, md: 5, lg: 5, xl: 200 }} my={5} py={5}>
        <Heading
          borderBottom="1px"
          borderColor="gray.200"
          alignContent="right"
          my={5}
          py={5}
        >
          About {coin.name}
        </Heading>
        <Text mx={{ md: 10 }} textAlign="justify">
          {removeTags(coin.description?.en)}
        </Text>
      </Box>
    </>
  );
};

export default About;
