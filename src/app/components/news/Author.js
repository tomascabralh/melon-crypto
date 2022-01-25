import React from "react";
import { Box, Stack, Text, Link } from "@chakra-ui/layout";

const Author = ({ article }) => {
  return (
    <>
      <Box mt={6} direction={"row"} spacing={4} align={"center"}>
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          {article.source !== undefined ? (
            <Text fontWeight={600} textAlign="left">
              By: {article.source.name}
            </Text>
          ) : null}
          {article.author !== null && article.author !== undefined ? (
            <Text color={"gray.500"} textAlign="left">
              Author: {article.author}
            </Text>
          ) : null}
          <Link href={article.url} isExternal textAlign="left">
            '(read original)'
          </Link>
        </Stack>
      </Box>
    </>
  );
};
export default Author;
