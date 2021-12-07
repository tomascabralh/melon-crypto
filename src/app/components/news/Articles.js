import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Heading, Link, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Author from "./Author";


const Articles = ({sortBy}) => {
  const [articles, setArticles] = useState([]);
  const [sortedBy, setSortedBy] = useState("publishedAt");

  const APIkey = "ad888119f1d4427dab37e01c74a66761";
  const GETrequest = `https://newsapi.org/v2/everything?q=crypto&sortBy=${sortedBy}&apiKey=${APIkey}`;

  const buildArticle = articles.map((article) => {
    return (
      <Box mx={{ md: 0, lg: 300 }} my={5} py={5} borderBottom='1px' borderColor='gray.100' alignContent='right' key={article.source.id}>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={article.urlToImage}
                alt={article.title}
                objectFit="contain"
              />
            </Link>
          </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {article.title}
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            fontSize="lg">
              {article.description}
          </Text>
          <Author article={article}/>
        </Box>
      </Box>
      </Box>
      </Box>
    )
  })
  

  useEffect(() => {
    axios.get(GETrequest).then((res) => {
      setArticles(res.data.articles);
    });
  }, [sortedBy]);

  useEffect(() => {
    setSortedBy(sortBy);
  }, [sortBy]);

  return (
    <Box>
      {buildArticle}
    </Box>
  );
};

export default Articles;
