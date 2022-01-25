import React, { useState, useEffect } from "react";
import { Box, Center } from "@chakra-ui/layout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NewsCarouselCard from "./NewsCarouselCard";
import { getDatabase, ref, onValue } from "firebase/database";
import _ from "lodash";

const NewsCarousel = () => {
  const [articles, setArticles] = useState([]);

  const formatHrefTitle = (Title) => {
    var title = Title.replaceAll(" ", "-");
    var formattedTitle = title.replaceAll(".", "-");
    var formattedtitle = formattedTitle.replaceAll("$", "usd");
    return formattedtitle;
  };

  const filterArray = (Articles) => {
    const result = Articles.reduce((temp, value) => {
      if (temp.title.includes("crypto") === true && temp.length < 10)
        temp.push(value);
      return temp;
    }, []);
    return result;
  };

  useEffect(() => {
    const Articles = ref(getDatabase(), `news/`);
    onValue(Articles, (snapshot) => {
      const data = snapshot.val();
      const filter = filterArray(
        _.toArray(data),
        (i) => i.titles.includes("crypto"),
        10
      );
      console.log(filter);
      setArticles(filter);
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
