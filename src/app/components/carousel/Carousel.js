import { Center, Box } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselCard from "./CarouselCard";

const CoinCarousel = () => {
  const GETrequest =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h";

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(GETrequest).then((res) => {
      setCoins(res.data);
    });
  }, []);

  const CarouselEntries = coins.map((coin) => {
    return <CarouselCard coin={coin} />;
  });

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
          centerSlidePercentage={40}
          transitionTime={1000}
        >
          {CarouselEntries}
        </Carousel>
      </Center>
    </Box>
  );
};

export default CoinCarousel;
