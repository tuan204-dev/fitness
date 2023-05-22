import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Box} from '@mui/material'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import SearchExercise from '../../components/SearchExercise/SearchExercise'
import Exercises from '../../components/Exercises/Exercises'
import NotExist from '../../components/NotExist/NotExist'


const Home = (props) => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')

  useEffect(() => {
    const fetchInitData = async () => {
      const response = await fetch('/data/data.json')
      const initData = await response.json()
      setExercises(initData)
    }

    fetchInitData()
  }, [])

  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />

      {exercises.length !== 0 ? (<Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />) : (<NotExist/>)}

    </Box>
  )
}

Home.propTypes = {}

export default Home
