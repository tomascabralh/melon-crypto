import { Box } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import React from 'react';

const TimeSelector = () => {

    const daysrange ={'14 days':'14', '1 month':'30', '6 months':'180', '1 year': '365'}
    const options = daysrange.map((item) => {
        return(<option value={item.value} key={item.key}>{item.key}</option>)})

    return (<Box>
        <Select placeholder='7 days' w='40' >
          {options}
        </Select>
        </Box>)
}

export default TimeSelector;