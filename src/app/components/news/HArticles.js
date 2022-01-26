import React, { useState, useEffect } from "react";
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
  Stack,
} from "@chakra-ui/react";
import Author from "./Author";
import FormatDay from "./DayFormater";
import SortBySelector from "./SortBySelector";
import { getDatabase, ref, onValue } from "firebase/database";
import _ from "lodash";
import {
  formatHrefTitle,
  deformatHrefTitle,
  filterArray,
  removeTags,
} from "../Functions";

const Articles = (params) => {
  const [articles, setArticles] = useState([]);
  const [sortby, setSortBy] = useState("Crypto");
  const [searchCoin, setSearchCoin] = useState(null);

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
        key={index.toString()}
        _hover={{
          background: "gray.200",
          color: "teal.800",
        }}
      >
        <Link
          href={`/news/${formatHrefTitle(article.title)}`}
          style={{ textDecoration: "none" }}
        >
          <Stack direction={{ base: "column", sm: "column", md: "row" }} mx={5}>
            <AspectRatio
              w={{ sm: "100%", md: 300 }}
              ratio={{ base: 2 / 1, sm: 2 / 1, md: 1 }}
              ml={{ sm: 0, md: "5%" }}
              mr={{ sm: 0, md: 10 }}
            >
              <Image
                borderRadius="lg"
                src={article.urlToImage}
                alt={article.title}
                objectFit={"scale-down"}
              />
            </AspectRatio>
            <VStack align={"left"}>
              <Heading mt={1}>{deformatHrefTitle(article.title)}</Heading>
              <Text as="p" mt={2} fontSize="lg">
                {removeTags(article.description)}
              </Text>
              <Spacer />
              <Box alignContent={"left"} w={"100%"}>
                <Author article={article} />
                <Text color={"gray.500"} textAlign="left">
                  Date: <FormatDay date={article.publishedAt} />
                </Text>
              </Box>
            </VStack>
          </Stack>
        </Link>
      </Center>
    );
  });

  useEffect(() => {
    const Articles = ref(getDatabase(), `news/`);
    onValue(Articles, (snapshot) => {
      const data = snapshot.val();
      if (sortby === "Crypto") {
        const filter = filterArray(_.toArray(data), searchCoin);
        setArticles(filter);
      } else {
        const filter = filterArray(_.toArray(data), searchCoin).sort(function (
          a,
          b
        ) {
          return new Date(b.publishedAt) - new Date(a.publishedAt);
        });
        setArticles(filter.slice(0, 30));
      }
    });
  }, [sortby, params.q, searchCoin]);

  useEffect(() => {
    if (params.q !== undefined) {
      setSearchCoin(params.q);
    }
  }, [sortby, params.q]);

  return (
    <>
      <Box
        mx={{ base: 5, sm: 5, md: 5, lg: 5, xl: 200 }}
        my={5}
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
        alignContent="right"
      >
        <HStack alignContent="center">
          <Box>
            <Heading>
              {searchCoin !== null ? searchCoin : "Crypto"} News
            </Heading>
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
          </VStack>
        </Center>
      )}
    </>
  );
};

export default Articles;
