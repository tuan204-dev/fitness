import React from 'react'
import PropTypes from 'prop-types'
import {Box, Button, Typography} from '@mui/material'
import HeroBannerImage from '../../assets/images/banner.png'
import styles from './HeroBanner.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const HeroBanner = (props) => {
  const handleScrollToExercises = () => {
    document.getElementById('exercises')?.scrollIntoView()
  }

  return (
    <Box
      sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'},
      }}
      position='relative'
      p='20px'
    >
      <Typography color='#FF2625' fontWeight='600' fontSize='28px'>
        Fitness Club
      </Typography>
      <Typography
        fontWeight='700'
        mt='30px'
        mb='23px'
        sx={{
          fontSize: {lg: '44px', xs: '40px'},
        }}
      >
        Sweet, Smile <br /> and Repeat
      </Typography>
      <Typography
        fontSize='22px'
        fontFamily='Alegreya'
        lineHeight='35px'
        mb={4}
      >
        Check out the most effective exercises
      </Typography>
      <Button
        onClick={handleScrollToExercises}
        variant='contained'
        color='error'
        sx={{backgroundColor: '#ff2625', padding: '10px'}}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color='#ff2625'
        sx={{
          opacity: 0.1,
          display: {lg: 'block', xs: 'none'},
        }}
        fontSize='200px'
        mt='30px'
      >
        Exercise
      </Typography>
      <Box sx={{display: {lg: 'block', xs: 'none'}}}>
        <img
          src={HeroBannerImage}
          alt='Hero'
          className={cx('hero-image')}
        />
      </Box>
    </Box>
  )
}

HeroBanner.propTypes = {}

export default HeroBanner
