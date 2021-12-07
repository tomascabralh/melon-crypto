import React from "react";
import { Box, Stack, Text, Link } from "@chakra-ui/layout";

const Author = ({ article }) => {
  return (
    <>
      <Box mt={6} direction={"row"} spacing={4} align={"center"}>
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600} textAlign="left">
            By: {article.source.name}
            <Link href={article.url} isExternal>
              '(read original)'
            </Link>
          </Text>
          {article.author !== null ? (
            <Text color={"gray.500"} textAlign="left">
              Author: {article.author}
            </Text>
          ) : null}
        </Stack>
      </Box>
    </>
  );
};
export default Author;
