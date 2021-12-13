import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Link,
} from "@chakra-ui/react";
import Author from "../news/Author";

const NewsCarouselCard = ({ article }, { index }) => {
  const formatHrefTitle = (Title) => {
    var title = Title.replaceAll(" ", "-");
    return title;
  };

  return (
    <Center py={6} pb={20} key={index}>
      <Box
        maxW={"445px"}
        w="100%"
        boxShadow={"lg"}
        rounded={"lg"}
        p={6}
        overflow={"hidden"}
        maxHeight="500px"
        minHeight="500px"
        _hover={{
          background: "gray.200",
          color: "teal.800",
        }}
      >
        <Link
          href={`/news/${formatHrefTitle(article.title)}`}
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
            <Image
              src={article.urlToImage}
              layout={"fill"}
              maxHeight="210px"
              alt={article.title}
            />
          </Box>
          <Stack>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {article.title}
            </Heading>
            <Box maxHeight="100px">
              <Text color={"gray.500"} whiteSpace="pre-wrap">
                {article.description}
              </Text>
            </Box>
          </Stack>
          <Author article={article} />
        </Link>
      </Box>
    </Center>
  );
};

export default NewsCarouselCard;
