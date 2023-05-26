import {Box, Stack, Typography} from '@mui/material'
import React from 'react'
import LogoBrand from '../../assets/images/Logo-1.png'

const Footer = (props) => {
  return (
    <Box py='10px' mt='80px' bgcolor='#FFF3F4'>
      <Stack>
        <Stack pt='24px' alignItems='center'>
          <Box sx={{width: {xs: '140px', lg: '200px'}}}>
            <img src={LogoBrand} alt='Brand' style={{width: '100%'}} />
          </Box>
        </Stack>
        <Typography
          sx={{fontSize: {xs: '20px', lg: '24px'}}}
          textAlign='center'
          py='26px'
        >
          Made with ❤️ by{' '}
          <a
            style={{
              textDecoration: 'none',
              color: '#000',
            }}
            href='https://github.com/tuan204-dev'
            target='_blank'
            rel='noreferrer'
          >
            tuan204.dev
          </a>
        </Typography>
      </Stack>
    </Box>
  )
}

Footer.propTypes = {}

export default Footer
