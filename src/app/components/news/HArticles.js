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
                <Heading marginTop="1">
                  {deformatHrefTitle(article.title)}
                </Heading>
                <Text
                  as="p"
                  marginTop="2"
                  fontSize="lg"
                  display={{ base: "none", sm: "none", md: "flex" }}
                >
                  {removeTags(article.description)}
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
