import { Box, Center } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NewsCarouselCard from "./NewsCarouselCard";

const NewsCarousel = () => {
  const [articles, setArticles] = useState([]);

  const APIkey = "ad888119f1d4427dab37e01c74a66761";
  const GETrequest = `https://newsapi.org/v2/everything?q=crypto&apiKey=${APIkey}`;

  useEffect(() => {
    axios.get(GETrequest).then((res) => {
      setArticles(res.data.articles);
    });
  }, []);

  const CarouselEntries = articles.map((article) => {
    return <NewsCarouselCard article={article} />;
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
          showArrows={true}
          showIndicators={false}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={12}
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
