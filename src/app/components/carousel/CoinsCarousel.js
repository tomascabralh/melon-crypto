import { Box } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CarouselCard from "./CoinsCarouselCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../../utils/responsive";

const CoinCarousel = () => {
  const GETrequest =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h";

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(GETrequest).then((res) => {
      setCoins(res.data);
    });
  }, []);

  const CarouselEntries = coins.map((coin, index) => {
    return <CarouselCard coin={coin} key={index} />;
  });

  return (
    <Box w={{ base: "100% ", lg: "75%" }} m="auto">
      <Carousel
        arrows={false}
        swipeable={true}
        draggable={true}
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
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {CarouselEntries}
      </Carousel>
    </Box>
  );
};

export default CoinCarousel;
