import { Box, Grid, Spacer, Flex } from '@chakra-ui/layout';
import React from 'react';

const CoinStats = ({ coin }) => {
    return (<><Box  bg='red' w='700px' h='250px'>
        </Box>
        <Box  w='800px' h='10' bg='green'>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} mb='10px'>
        <Box w='700px' h='10' bg='blue.500' />
        <Box w='700px' h='10' bg='blue.500' />
        </Grid>
        </Box>
        </>


        

    )
}
//{coin.market_data.high_24h?.usd}
export default CoinStats;