import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Link,
  AspectRatio,
  Text,
  Grid,
  HStack,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Author from "./Author";
import FormatDay from "./DayFormater";
import SortBySelector from "./SortBySelector";

const Articles = (params) => {
  const [articles, setArticles] = useState([]);
  const [sortby, setSortBy] = useState("relevancy");
  const [searchParams, setSearchParams] = useState();
  const [search, setSearch] = useState();

  const formatHrefTitle = (Title) => {
    var title = Title.replaceAll(" ", "-");
    return title;
  };

  const fetchDataFromSortBySelector = (sortby) => {
    setSortBy(sortby);
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
    params.q !== undefined
      ? setSearchParams(params.q)
      : setSearchParams("crypto");
    params.searchT !== undefined ? setSearch(params.searchT) : setSearch("q");
  });

  useEffect(() => {
    searchParams !== undefined && search !== undefined
      ? axios
          .get(
            `https://newsapi.org/v2/everything?${search}=${searchParams}&sortBy=${sortby}&apiKey=${process.env.REACT_APP_articles_APIkey}`
          )
          .then((res) => {
            setArticles(res.data.articles);
          })
      : console.log("cabra gei xd");
  }, [sortby, searchParams, search]);

  return (
    <>
      <Box
        mx={{ md: 0, lg: 200 }}
        my={5}
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
        alignContent="right"
      >
        <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
          <Box>
            <Heading>{searchParams} News</Heading>
          </Box>
          <HStack
            alignContent="right"
            pl={{ sm: 0, md: 100, lg: 200, xl: 500 }}
          >
            <Text textAlign={{ sm: "left", md: "right" }}>Sort By: </Text>
            <SortBySelector
              fetchDataFromSortBySelector={fetchDataFromSortBySelector}
            />
          </HStack>
        </Grid>
      </Box>
      <Box>{buildArticle}</Box>
    </>
  );
};

export default Articles;
