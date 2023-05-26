import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar'

const SimilarExercises = (props) => {
  const {targetMuscleExercises, equipmentMuscleExercises} = props
  const exerciseSimilarNumbs = 15

  return (
    <>
      <Box sx={{mt: {lg: '100px', xs: '20px'}}} p='20px'>
        <Typography variant='h3' mb='32px'>
          Similar{' '}
          <span style={{color: '#ff2625', textTransform: 'capitalize'}}>
            Target Muscle
          </span>{' '}
          exercises
        </Typography>
        <Stack sx={{p: '2'}}>
          <HorizontalScrollbar
            isBodyParts={false}
            exerciseSimilarNumbs={exerciseSimilarNumbs}
            data={targetMuscleExercises?.slice(0, exerciseSimilarNumbs)}
          />
        </Stack>
      </Box>
      <Box sx={{mt: {lg: '100px', xs: '20px'}}} p='20px'>
        <Typography variant='h3' mb='32px'>
          Similar{' '}
          <span style={{color: '#ff2625', textTransform: 'capitalize'}}>
            Equipment
          </span>{' '}
          exercises
        </Typography>
        <Stack sx={{p: '2'}}>
          <HorizontalScrollbar
            isBodyParts={false}
            exerciseSimilarNumbs={exerciseSimilarNumbs}
            data={equipmentMuscleExercises?.slice(0, exerciseSimilarNumbs)}
          />
        </Stack>
      </Box>
    </>
  )
}

SimilarExercises.propTypes = {}

export default SimilarExercises
