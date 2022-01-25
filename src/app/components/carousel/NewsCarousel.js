import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsCarouselCard from "./NewsCarouselCard";
import { getDatabase, ref, onValue } from "firebase/database";
import { filterArray } from "../Functions";
import _ from "lodash";
import { responsive } from "../../../utils/responsive";

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

  return (
    <Box w={{ base: "100% ", lg: "75%" }} m="auto">
      <Carousel
        arrows={false}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {CarouselEntries}
      </Carousel>
    </Box>
  );
};

export default NewsCarousel;
