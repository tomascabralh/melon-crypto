import React, { useState, useEffect } from "react";
import { Box, Center } from "@chakra-ui/layout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NewsCarouselCard from "./NewsCarouselCard";
import { getDatabase, ref, onValue } from "firebase/database";
import { filterArray } from "../Functions";
import _ from "lodash";

const NewsCarousel = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const Articles = ref(getDatabase(), `news/`);
    onValue(Articles, (snapshot) => {
      const data = snapshot.val();
      const filter = filterArray(_.toArray(data), "crypto");
      setArticles(filter.slice(0, 10));
    });
  }, []);

  const CarouselEntries = articles.map((article, index) => {
    return <NewsCarouselCard article={article} key={index} />;
  });

  useEffect(() => {}, []);

  return (
    <Box w="100%" overflow="hidden">
      <Center>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          swipeable={true}
          emulateTouch={true}
          stopOnHover={true}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={25}
          transitionTime={1000}
          interval={5000}
        >
          {CarouselEntries}
        </Carousel>
      </Center>
    </Box>
  );
};

export default NewsCarousel;
