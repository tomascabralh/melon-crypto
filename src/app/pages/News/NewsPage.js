import { Box, Heading } from "@chakra-ui/layout";
import React from "react";
import NewsCarousel from "../../components/carousel/NewsCarousel";
import Articles from "../../components/news/HArticles";

const NewsPage = () => {
  return (
    <>
      <Box my={5} py={5}>
        <Heading
          borderBottom="1px"
          borderColor="gray.200"
          mx={{ md: 0, lg: 200 }}
          my={5}
          py={5}
        >
          Trending News
        </Heading>
        <NewsCarousel />
      </Box>
      <Articles q={"Crypto"} />
    </>
  );
};

export default NewsPage;
