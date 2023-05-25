import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Box, useTheme} from '@mui/material'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import SearchExercise from '../../components/SearchExercise/SearchExercise'
import Exercises from '../../components/Exercises/Exercises'
import NotExist from '../../components/NotExist/NotExist'
import fetchLocalData from '../../utils/fetchLocalData'
import {ExercisesContext} from '../../App'

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
        {exercises.length !== 0 ? (
          <Exercises exercises={exercises} />
        ) : (
          <NotExist />
        )}
      </Box>
    </Box>
  )
}

Home.propTypes = {}

export default Home
