import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from '../../utils/fetchData'
import {Box} from '@mui/material'
import Detail from '../../components/Detail/Detail'
import ExerciseVideo from '../../components/ExerciseVideo/ExerciseVideo'
import SimilarExercises from '../../components/SimilarExercises/SimilarExercises'
import {useParams} from 'react-router-dom'
import {mainUrl, rootUrl} from '../../utils/url'
import fetchLocalData from '../../utils/fetchLocalData'

const ExerciseDetail = (props) => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState({})
  const [targetMuscleExercises, setTargetMuscleExercises] = useState(
    []
  )
  const [equipmentMuscleExercises, setEquipmentMuscleExercises] =
    useState([])

  const {id} = useParams()

  useEffect(() => {
    ;(async () => {
      const exerciseDbUrl = mainUrl
      const youtubeSearchUrl =
        'https://youtube-search-and-download.p.rapidapi.com'

      const exercisesResponse = await fetchLocalData(
        '/data/exercises.json'
      )

      const exerciseDetailData = exercisesResponse.find(
        (exercise) => exercise.id === id
      )
      setExerciseDetail(exerciseDetailData)

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      )
      setExerciseVideos(exerciseVideoData)

      // const targetMuscleExerciseData = await fetchData(
      //   `${exerciseDbUrl}/target/${exerciseDetailData.target}`,
      //   exerciseOptions
      // )

      const targetMuscleExerciseData = exercisesResponse.filter(
        (exercise) => exercise.target === exerciseDetailData.target
      )
      setTargetMuscleExercises(targetMuscleExerciseData)

      const equipmentMuscleExerciseData = exercisesResponse.filter(
        (exercise) =>
          exercise.equipment === exerciseDetailData.equipment
      )
      setEquipmentMuscleExercises(equipmentMuscleExerciseData)
    })()
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentMuscleExercises={equipmentMuscleExercises}
      />
    </Box>
  )
}

ExerciseDetail.propTypes = {}

export default ExerciseDetail
