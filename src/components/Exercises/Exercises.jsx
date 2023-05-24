import { Box, Pagination, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import ExerciseCard from '../ExerciseCard/ExerciseCard'


// Only render data, not fetch data
const Exercises = (props) => {
  const {exercises, setExercises, bodyPart} = props

  const [currentPage, setCurrentPage] = useState(1)
  const exercisePerPage = 9

  const indexOfLastExercise = currentPage * exercisePerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  )

  const paginate = (e, value) => {
    setCurrentPage(value)
    document.getElementById('exercises-section')?.scrollIntoView()
  }


  return (
    <Box id='exercises' mt='50px' p='20px' sx={{mt: {lg: '110px'}}}>
      <Typography
        sx={{textAlign: {xs: 'center'}, pl: {xs: '0'}, ml: {xs: '0'}}}
        variant='h3'
        pl='20px'
        ml='50px'
        mb='46px'
      >
        Show Results
      </Typography>
      <Stack
        direction='row'
        flexWrap='wrap'
        justifyContent='center'
        sx={{gap: {lg: '110px', xs: '70px'}}}
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard
            key={exercise.id || index}
            exercise={exercise}
          />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > exercisePerPage && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={(e, value) => paginate(e, value)}
            // size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

Exercises.propTypes = {
  exercises: PropTypes.array.isRequired,
  setExercises: PropTypes.func.isRequired,
  bodyPart: PropTypes.string,
}

Exercises.defaultProps = {
  bodyPart: 'all',
}

export default Exercises
