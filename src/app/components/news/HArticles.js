import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Heading, Link, AspectRatio, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Author from "./Author";
import FormatDay from "./DayFormater";

const Articles = ({ sortBy }) => {
  const [articles, setArticles] = useState([]);
  const [sortedBy, setSortedBy] = useState("publishedAt");

  const GETrequest = `https://newsapi.org/v2/everything?q=crypto&sortBy=${sortedBy}&apiKey=${process.env.REACT_APP_articles_APIkey}`;

  const formatHrefTitle = (Title) => {
    var title = Title.replaceAll(" ", "-");
    return title;
  };

  const buildArticle = articles.map((article, index) => {
    return (
      <Box
        mx={{ md: 0, lg: 100, xl: 300 }}
        py={5}
        my={10}
        borderBottom="1px"
        borderColor="gray.200"
        alignContent="right"
        key={index.toString()}
        _hover={{
          background: "gray.200",
          color: "teal.800",
        }}
        borderRadius="lg"
      >
        <Link
          href={`/news/${formatHrefTitle(article.title)}`}
          style={{ textDecoration: "none" }}
        >
          <Box
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <Box display="flex" flex="1" marginRight="3" position="relative">
              <Box
                width={{ base: "0", sm: "30%" }}
                zIndex="2"
                marginLeft={{ base: "0", sm: "5%" }}
                mx={10}
              >
                <AspectRatio maxW="400" maxH="400" ratio={1}>
                  <Image
                    borderRadius="lg"
                    src={article.urlToImage}
                    alt={article.title}
                    objectFit="contain"
                  />
                </AspectRatio>
              </Box>
              <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: "3", sm: "0" }}
              >
                <Heading marginTop="1">{article.title}</Heading>
                <Text as="p" marginTop="2" fontSize="lg">
                  {article.description}
                </Text>
                <Author article={article} />
                <Text color={"gray.500"} textAlign="left">
                  Date: <FormatDay date={article.publishedAt} />
                </Text>
              </Box>
            </Box>
          </Box>
        </Link>
      </Box>
    );
  });

  useEffect(() => {
    axios.get(GETrequest).then((res) => {
      setArticles(res.data.articles);
    });
  }, [sortedBy]);

  useEffect(() => {
    setSortedBy(sortBy);
  }, [sortBy]);

  return <>{buildArticle}</>;
};

export default Articles;
