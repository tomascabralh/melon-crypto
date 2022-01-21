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
import ImageNotFound from "../../../images/image-not-found.png";

const NewsCarouselCard = ({ article }, { key }) => {
  const formatHrefTitle = (Title) => {
    var title = Title.replaceAll(" ", "-");
    return title;
  };

  return (
    <Center py={6} pb={20} key={key}>
      <Box
        maxW={{ base: "330px", sm: "445px" }}
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
              fallbackSrc={ImageNotFound}
            />
          </Box>
          <Stack>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {article.title}
            </Heading>
            <Box h={100} overflow={"hidden"}>
              <Text
                color={"gray.500"}
                whiteSpace="pre-wrap"
                overflow={"hidden"}
              >
                {article.description}
              </Text>
            </Box>
          </Stack>
        </Link>
        <Author article={article} />
      </Box>
    </Center>
  );
};

export default NewsCarouselCard;
