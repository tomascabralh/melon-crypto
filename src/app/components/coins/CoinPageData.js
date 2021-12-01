import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { useParams } from "react-router-dom";
import axios from "axios";

const CoinPageData = () => {
    let  {id} = useParams();
    const [coin, setCoin] = useState([]);
  
    const GETrequest = `https://api.coingecko.com/api/v3/coins/${id}`
    
  
    useEffect(() => {
      axios.get(GETrequest).then((res) => {
        setCoin(res.data);
      });
    }, []);
console.log(GETrequest)
    return (<>
    <Box w='100%' >
    <Flex p='20px' m='50px'>
    <Box minW='200px' mr='100px'><img src={coin.image.large} alt={coin.name}/></Box>
    <Box maxH='200px' overflow="auto">{coin.description.en}</Box>
    </Flex>
    </Box>
    <Box w='100%' h={550} >
    <Flex px='20px' mx='50px'>
    <Box minW='200px'maxW='250px' maxH={550} mr='50px' overflow="auto">{coin.description.en}</Box>
    <Box maxH={550} overflow="auto">{coin.description.en} {coin.description.en}</Box>
    </Flex>
    </Box>
        </>
    )
}

export default CoinPageData;