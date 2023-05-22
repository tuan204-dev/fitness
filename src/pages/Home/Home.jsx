import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Box} from '@mui/material'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import SearchExercise from '../../components/SearchExercise/SearchExercise'
import Exercises from '../../components/Exercises/Exercises'


const Home = (props) => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')


  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
  )
}

Home.propTypes = {}

export default Home
