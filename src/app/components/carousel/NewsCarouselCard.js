import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Link,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import Author from "../news/Author";
import ImageNotFound from "../../../images/image-not-found.png";
import { deformatHrefTitle, formatHrefTitle, removeTags } from "../Functions";
import CommentsIcon from "../news/comments/CommentsIcon";

const NewsCarouselCard = ({ article }) => {
  return (
    <Center py={4} pb={20} px={8}>
      <Box
        maxW={{ base: "330px", sm: "445px" }}
        w="100%"
        boxShadow={"lg"}
        rounded={"lg"}
        p={4}
        overflow={"hidden"}
        height="500px"
        _hover={{
          background: "gray.200",
          color: "teal.700",
        }}
        transition={"all 0.5s ease-out 100ms"}
      >
        <Link
          href={`/news/${formatHrefTitle(article.title)}`}
          style={{ textDecoration: "none" }}
        >
          <Box mt={-6} mx={-6} mb={6} pos={"relative"}>
            <Image
              src={article.urlToImage}
              borderRadius="16px"
              objectFit="cover"
              height="200px"
              w="full"
              alt={article.title}
              fallbackSrc={ImageNotFound}
            />
          </Box>
          <Stack>
            <Heading fontSize={"lg"} fontFamily={"body"}>
              {deformatHrefTitle(article.title)}
            </Heading>
            <Box h={100} overflow={"hidden"}>
              <Text
                color={"gray.500"}
                whiteSpace="pre-wrap"
                overflow={"hidden"}
                fontSize={"sm"}
              >
                {removeTags(article.description)}
              </Text>
            </Box>
          </Stack>
        </Link>
        <Spacer />
        <HStack mt={5}>
          <Author article={article} />
          <Spacer />
          <Box mt={4}>
            <CommentsIcon article={article} />
          </Box>
        </HStack>
      </Box>
    </Center>
  );
};

export default NewsCarouselCard;
