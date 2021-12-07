import { Box, Grid, Heading, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import NewsCarousel from "../../components/carousel/NewsCarousel";
import SortBySelector from "../../components/news/SortBySelector";
import Articles from "../../components/news/HArticles";

const NewsPage = () => {
  const [sortBy, setSortBy] = useState("relevancy");
  const fetchDataFromSortBySelector = (sortby) => {
    setSortBy(sortby);
  };

  return (
    <>
      <Box mx={{ md: 0, lg: 200 }} my={5} py={5}>
        <Heading borderBottom="1px" borderColor="gray.200" my={5} py={5}>
          Trending News
        </Heading>
        <NewsCarousel />
      </Box>
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
            <Heading>Other News xd</Heading>
          </Box>
          <Box alignContent="right" pl={{ sm: 0, md: 100, lg: 200, xl: 500 }}>
            <Text textAlign={{ sm: "left", md: "right" }}>Sort By: </Text>
            <SortBySelector
              fetchDataFromSortBySelector={fetchDataFromSortBySelector}
            />
          </Box>
        </Grid>
      </Box>
      <Box>
        <Articles sortBy={sortBy} />
      </Box>
    </>
  );
};

export default NewsPage;
