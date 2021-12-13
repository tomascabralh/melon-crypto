import { Box, Heading, Text } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Image } from "@chakra-ui/image";
import Author from "../../components/news/Author";
import FormatDay from "../../components/news/DayFormater";

const ArticlePage = () => {
  const { news } = useParams();
  const [articleData, setArticleData] = useState([]);

  const GETrequest = (Title) => {
    var title = Title.replaceAll("-", " ");
    return `https://newsapi.org/v2/everything?qInTitle="${title}"&apiKey=${process.env.REACT_APP_articles_APIkey}`;
  };

  useEffect(() => {
    axios.get(GETrequest(news)).then((res) => {
      setArticleData(res.data.articles[0]);
    });
  }, []);

  return (
    <>
      {articleData.title !== undefined ? (
        <Box my={20} px={300}>
          <Heading justifyContent="left" my={5} mb={5}>
            {articleData.title}
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
            Date: <FormatDay date={articleData.publishedAt} />
          </Text>
          <Image
            borderRadius="lg"
            src={articleData.urlToImage}
            alt={articleData.title}
            objectFit="contain"
          />
          <Text as="p" marginTop="2" fontSize="lg" justifyContent="center">
            {articleData.content}
          </Text>
        </Box>
      ) : null}
    </>
  );
};

export default ArticlePage;
