import {Stack} from '@mui/material'
import React from 'react'
import {InfinitySpin} from 'react-loader-spinner'

const Loader = (props) => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center'>
      <InfinitySpin color='gray' />
    </Stack>
  )
}

Loader.propTypes = {}

export default Loader
