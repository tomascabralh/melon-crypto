import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Divider } from "@chakra-ui/layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Image } from "@chakra-ui/image";
import Author from "../../components/news/Author";
import FormatDay from "../../components/news/DayFormater";
import SpinnerUI from "../../components/UI/Spinner";
import CreateComment from "../../components/news/comments/CreateComment";
import Comments from "../../components/news/comments/Comments";
import { useAuth } from "../../components/contexts/AuthContext";

const ArticlePage = () => {
  const { news } = useParams();
  const [articleData, setArticleData] = useState([]);
  const { users } = useAuth();

  useEffect(() => {
    const GETrequest = (Title) => {
      const title = Title.replaceAll("-", " ");
      return `https://newsapi.org/v2/everything?qInTitle="${title}"&apiKey=${process.env.REACT_APP_articles_APIkey}`;
    };
    axios.get(GETrequest(news)).then((res) => {
      setArticleData(res.data.articles[0]);
    });
  }, [news]);

  return (
    <>
      {articleData.title !== undefined ? (
        <Box my={20} mx={{ base: 5, sm: 5, md: 5, lg: 100, xl: 300 }}>
          <Heading justifyContent="left" my={5} mb={5}>
            {articleData?.title}
          </Heading>
          <Author article={articleData} />
          <Text
            color={"gray.500"}
            textAlign="left"
            pt={5}
            my={5}
            borderBottom="1px"
            borderColor="gray.200"
          >
            Date: <FormatDay date={articleData?.publishedAt} />
          </Text>
          <Image
            borderRadius="lg"
            src={articleData?.urlToImage}
            alt={articleData?.title}
            objectFit="contain"
          />
          <Text as="p" marginTop="2" fontSize="lg" justifyContent="center">
            {articleData.content}
          </Text>
        </Box>
      ) : (
        <SpinnerUI />
      )}
      <Box mx={{ base: 5, sm: 5, md: 5, lg: 100, xl: 200 }} my={20} py={5}>
        <Heading>Comment Section</Heading>
        <Divider my={10} />
        {users ? <CreateComment title={news} /> : null}
        <Comments title={news} />
      </Box>
    </>
  );
};

export default ArticlePage;
