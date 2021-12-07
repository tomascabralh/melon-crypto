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

const NewsCarouselCard = ({ article }) => {
  return (
    <Center py={6} pb={20} key={article.source.id}>
      <Box
        maxW={"445px"}
        w={"full"}
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
            <Author article={article}/>
        </Link>
      </Box>
    </Center>
  );
};

export default NewsCarouselCard;
