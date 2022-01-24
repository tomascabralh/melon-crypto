import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Link,
  AspectRatio,
  Text,
  HStack,
  Center,
  Image,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import Author from "./Author";
import FormatDay from "./DayFormater";
import SortBySelector from "./SortBySelector";
import { getDatabase, ref, set, onValue, update } from "firebase/database";

const Articles = (params) => {
  const [articles, setArticles] = useState([]);
  const [sortby, setSortBy] = useState("relevancy");
  const [searchParams, setSearchParams] = useState();
  const [search, setSearch] = useState();

  const formatHrefTitle = (Title) => {
    var title = Title.replaceAll(" ", "-");
    var formattedTitle = title.replaceAll(".", "-");
    var formattedtitle = formattedTitle.replaceAll("$", "usd");
    var formattitle = formattedtitle.replaceAll("#", "usd");
    return formattitle;
  };

  const fetchDataFromSortBySelector = (sortby) => {
    setSortBy(sortby);
  };

  const buildArticle = articles.map((article, index) => {
    return (
      <Center
        mx={{ md: 0, lg: 50, xl: 200 }}
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
            <Box
              display="flex"
              flex="1"
              marginRight={{ sm: 0, md: 3 }}
              position="relative"
            >
              <Box
                width={{ base: "0", sm: "30%" }}
                zIndex="2"
                marginLeft={{ sm: "0", md: "5%" }}
                mx={10}
              >
                <AspectRatio w="400" h="300" ratio={1}>
                  <Image
                    borderRadius="lg"
                    src={article.urlToImage}
                    alt={article.title}
                    objectFit="contain"
                    maxW={"100%"}
                    h="auto"
                    display={{ base: "none", sm: "block" }}
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
                <Text
                  as="p"
                  marginTop="2"
                  fontSize="lg"
                  display={{ base: "none", sm: "none", md: "flex" }}
                >
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
      </Center>
    );
  });

  useEffect(() => {
    params.q !== undefined
      ? setSearchParams(params.q)
      : setSearchParams("crypto");
    params.searchT !== undefined ? setSearch(params.searchT) : setSearch("q");
  }, [params]);

  useEffect(() => {
    searchParams !== undefined && search !== undefined
      ? axios
          .get(
            `https://newsapi.org/v2/everything?${search}=${searchParams}&sortBy=${sortby}&apiKey=${process.env.REACT_APP_articles_APIkey}`
          )
          .then((res) => {
            setArticles(res.data.articles);
          })
      : console.log("loading");
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
        <HStack alignContent="center">
          <Box>
            <Heading>{searchParams} News</Heading>
          </Box>
          <Spacer />
          <Text textAlign={{ sm: "left", md: "right" }}>Sort By: </Text>
          <SortBySelector
            fetchDataFromSortBySelector={fetchDataFromSortBySelector}
          />
        </HStack>
      </Box>
      {articles[0] !== undefined ? (
        buildArticle
      ) : (
        <Center mx={{ md: 0, lg: 200 }} my={5} py={5} h="60vh">
          <VStack>
            <Heading mt={30} mb={30}>
              There are no matches for "{params.q}"{" "}
            </Heading>

            <Box>Try searching something else!</Box>
          </VStack>
        </Center>
      )}
    </>
  );
};

export default Articles;
