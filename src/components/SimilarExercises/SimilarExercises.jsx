import React from 'react'
import PropTypes from 'prop-types'
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar'
import Loader from '../Loader/Loader'

const SimilarExercises = (props) => {
  const {targetMuscleExercises, equipmentMuscleExercises} = props


  return (
    <>
      <Box sx={{mt: {lg: '100px', xs: '20px'}}} p='20px'>
        <Typography variant='h3' mb='32px'>
          Similar{' '}
          <span
            style={{color: '#ff2625', textTransform: 'capitalize'}}
          >
            Target Muscle
          </span>{' '}
          exercises
        </Typography>
        <Stack sx={{p: '2'}}>
          {targetMuscleExercises.length !== 0 ? (
            <HorizontalScrollbar
              isBodyParts={false}
              data={targetMuscleExercises.slice(0, 15)}
            />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
      <Box sx={{mt: {lg: '100px', xs: '20px'}}} p='20px'>
        <Typography variant='h3' mb='32px'>
          Similar{' '}
          <span
            style={{color: '#ff2625', textTransform: 'capitalize'}}
          >
            Equipment
          </span>{' '}
          exercises
        </Typography>
        <Stack sx={{p: '2'}}>
          {equipmentMuscleExercises.length !== 0 ? (
            <HorizontalScrollbar
              isBodyParts={false}
              data={equipmentMuscleExercises.slice(0, 15)}
            />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
    </>
  )
}

SimilarExercises.propTypes = {}

export default SimilarExercises
