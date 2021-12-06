import { Box, Heading } from "@chakra-ui/layout";
import React from "react";
import NewsCarousel from "../components/carousel/NewsCarousel";

const NewsPage = () => {
  return (
    <Box>
      <Heading mx={{ md: 0, lg: 300 }} my={10}>
        Trending News
      </Heading>
      <NewsCarousel />
    </Box>
  );
};

export default NewsPage;
