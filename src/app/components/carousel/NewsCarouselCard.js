import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Link,
} from "@chakra-ui/react";

const NewsCarouselCard = ({ article }) => {
  return (
    <Center py={6} pb={20}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"lg"}
        rounded={"lg"}
        p={6}
        overflow={"hidden"}
        maxHeight="500px"
        minHeight="500px"
      >
        <Link
          href={article.url}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image src={article.urlToImage} layout={"fill"} maxHeight="210px" />
          </Box>
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {article.title}
            </Heading>
            <Box maxHeight="100px">
              <Text color={"gray.500"} whiteSpace="pre-wrap">
                {article.description}
              </Text>
            </Box>
          </Stack>
          <Box mt={6} direction={"row"} spacing={4} align={"center"}>
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600} textAlign="left">
                By: {article.source.name}
              </Text>
              {article.author !== null ? (
                <Text color={"gray.500"} textAlign="left">
                  Author: {article.author}
                </Text>
              ) : null}
            </Stack>
          </Box>
        </Link>
      </Box>
    </Center>
  );
};

export default NewsCarouselCard;
