import { Box } from '@mui/material'
import React, { useState } from 'react'
import Exercises from '../../components/Exercises/Exercises'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import NotExist from '../../components/NotExist/NotExist'
import SearchExercise from '../../components/SearchExercise/SearchExercise'

const Home = (props) => {
  const [exercises, setExercises] = useState(Array(9).fill(0))
  const [bodyPart, setBodyPart] = useState('all')

  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />

      <Box id='exercises-section'>
        {exercises.length !== 0 ? <Exercises exercises={exercises} /> : <NotExist />}
      </Box>
    </Box>
  )
}

Home.propTypes = {}

export default Home
