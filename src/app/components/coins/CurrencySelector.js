import { Box } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import React from 'react';

const CurrencySelector = () => {

const currencies = ['aed', 'ars', 'aud', 'bch','bdt','bhd','bmd', 'bnb', 'brl', 'btc','cad','chf','clp','dot','eth', 'eur', 'gbp', 'idr','jpy', 'ltc', 'myr', 'php', 'rub', 'thb','xag', 'xdr', 'xrp','zar']
const options = currencies.map((item) => {
    return(<option value={item} key={item}>{item}</option>)
})

    return (
        <Box>
            <Select placeholder='usd' w='40'>
              {options}
            </Select>
        </Box>
    )
}

export default CurrencySelector;