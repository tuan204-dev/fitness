import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Box, useTheme} from '@mui/material'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import SearchExercise from '../../components/SearchExercise/SearchExercise'
import Exercises from '../../components/Exercises/Exercises'
import NotExist from '../../components/NotExist/NotExist'
import fetchLocalData from '../../utils/fetchLocalData'
import { ExercisesContext } from '../../App'

const Home = (props) => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')

  console.log(exercises)

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
          <Exercises
            bodyPart={bodyPart}
            exercises={exercises}
            setExercises={setExercises}
          />
        ) : (
          <NotExist />
        )}
      </Box>
    </Box>
  )
}

Home.propTypes = {}

export default Home
