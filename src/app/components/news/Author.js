import React from "react";
import { Box, VStack, Text, Link } from "@chakra-ui/layout";

const Author = ({ article }) => {
  return (
    <>
      <Box>
        <VStack spacing={0} fontSize={"sm"} align={"left"}>
          {article.source !== undefined ? (
            <Text fontWeight={600}>By: {article.source.name}</Text>
          ) : null}
          {article.author !== null && article.author !== undefined ? (
            <Text color={"gray.500"}>Author: {article.author}</Text>
          ) : null}
          <Link href={article.url} isExternal>
            '(read original)'
          </Link>
        </VStack>
      </Box>
    </>
  );
};
export default Author;
