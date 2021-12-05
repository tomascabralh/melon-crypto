import { Center, Box } from '@chakra-ui/layout';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CoinCarousel = () => {
    const GETrequest = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h'

    const [coins, setCoins] = useState([]);

    useEffect(() => {
      axios.get(GETrequest).then((res) => {
        setCoins(res.data);
      });
    }, []);

    const CarouselEntries = coins.map((coin) => {
        return (
            <Box>
                <img src={coin.image}/>
            </Box>
        )
    })

    return(
        <Center>
        <Carousel autoPlay='true' infiniteLoop='true' emulateTouch='true' width='500px' centerMode='true' centerMode='20' centerSlidePercentage='75' showThumbs={false} showArrows={false} showIndicators={false} showStatus={false}>
            {CarouselEntries}
        </Carousel>
        </Center>
    )
}

export default CoinCarousel;