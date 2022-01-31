import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Divider,
  Image,
  HStack,
  Spacer,
  AspectRatio,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Author from "../../components/news/Author";
import SpinnerUI from "../../components/UI/Spinner";
import CreateComment from "../../components/news/comments/CreateComment";
import Comments from "../../components/news/comments/Comments";
import { useAuth } from "../../components/contexts/AuthContext";
import { getDatabase, ref, onValue } from "firebase/database";
import { deformatHrefTitle, FormatDay } from "../../components/Functions";

const ArticlePage = () => {
  const { news } = useParams();
  const [articleData, setArticleData] = useState([]);
  const { users } = useAuth();

  useEffect(() => {
    const Articles = ref(getDatabase(), `news/${news}`);
    onValue(Articles, (snapshot) => {
      const data = snapshot.val();
      setArticleData(data);
    });
  }, [news]);

  return (
    <>
      {articleData.title !== undefined ? (
        <Box my={20} mx={{ base: 5, sm: 5, md: 5, lg: 100, xl: 300 }}>
          <Heading justifyContent="left" my={5} mb={5}>
            {deformatHrefTitle(articleData?.title)}
          </Heading>
          <HStack borderBottom="1px" borderColor="gray.200" pt={5} mb={5}>
            <Text color={"gray.500"} textAlign="left">
              Date: {FormatDay(articleData?.publishedAt)}
            </Text>
            <Spacer />
            <Author article={articleData} />
          </HStack>
          <AspectRatio ratio={{ base: 4 / 5, sm: 2 / 1, md: 2 / 1 }}>
            <Image
              borderRadius="lg"
              src={articleData?.urlToImage}
              alt={articleData?.title}
              objectFit="contain"
            />
          </AspectRatio>
          <Text as="p" mt={10} fontSize="lg" justifyContent="center">
            {articleData.content}
          </Text>
        </Box>
      ) : (
        <SpinnerUI />
      )}
      <Box mx={{ base: 5, sm: 5, md: 5, lg: 100, xl: 200 }} my={20} py={5}>
        <Heading>Comment Section</Heading>
        <Divider my={10} />
        <Comments title={news} />
        <Box mt={100}>{users ? <CreateComment title={news} /> : null}</Box>
      </Box>
    </>
  );
};

export default ArticlePage;
