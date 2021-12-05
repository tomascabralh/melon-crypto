import { Spinner } from '@chakra-ui/spinner';
import React from 'react';

const SpinnerUI = () => {
    return (
        <>
        <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='green.200'
    size='xl'
  />
  </>)
};

export default SpinnerUI;