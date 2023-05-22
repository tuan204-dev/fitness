import React from 'react';
import PropTypes from 'prop-types';
import {InfinitySpin} from 'react-loader-spinner'
import { Stack } from '@mui/material';


const Loader = props => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center'>
      <InfinitySpin color='gray'/>
    </Stack>
  );
};

Loader.propTypes = {
  
};

export default Loader;