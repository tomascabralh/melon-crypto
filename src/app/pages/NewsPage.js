import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React, {useState} from "react";
import NewsCarousel from "../components/carousel/NewsCarousel";
import SortBySelector from "../components/news/SortBySelector";
import Articles from "../components/news/Articles";

const NewsPage = () => {
  const [sortBy, setSortBy] = useState('relevancy')
  const fetchDataFromSortBySelector = (sortby) => {
    setSortBy(sortby)
  }

  return (<>
    <Box mx={{ md: 0, lg: 300 }} my={5} py={5} borderBottom='1px' borderColor='gray.100'>
      <Heading>
        Trending News
      </Heading>
      <NewsCarousel />
    </Box>
    <Box mx={{ md: 0, lg: 300 }} my={5} py={5} borderBottom='1px' borderColor='gray.100' alignContent='right'>
      <Text>Sort By: </Text>
      <SortBySelector fetchDataFromSortBySelector={fetchDataFromSortBySelector}/>
    </Box>
    <Box>
      <Articles sortBy={sortBy}/>
    </Box>
    </>
  );
};

export default NewsPage;
