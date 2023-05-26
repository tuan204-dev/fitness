import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from '../../components/404NotFound/NotFound'
import Detail from '../../components/Detail/Detail'
import ExerciseVideo from '../../components/ExerciseVideo/ExerciseVideo'
import SimilarExercises from '../../components/SimilarExercises/SimilarExercises'
import {
  fetchData,
  youtubeOptions
} from '../../utils/fetchData'
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

  const exerciseDetailData = useRef()
  useEffect(() => {
    ;(async () => {
      const youtubeSearchUrl =
        'https://youtube-search-and-download.p.rapidapi.com'

      const exercisesResponse = await fetchLocalData(
        '/data/exercises.json'
      )

      exerciseDetailData.current = exercisesResponse.find(
        (exercise) => exercise.id === id
      )

      if (exerciseDetailData.current) {
        setExerciseDetail(exerciseDetailData.current)

        const exerciseVideoData = await fetchData(
          `${youtubeSearchUrl}/search?query=${exerciseDetailData.current?.name}_fitness`,
          youtubeOptions
        )
        setExerciseVideos(exerciseVideoData)

        // const targetMuscleExerciseData = await fetchData(
        //   `${exerciseDbUrl}/target/${exerciseDetailData.current?.target}`,
        //   exerciseOptions
        // )

        const targetMuscleExerciseData = exercisesResponse.filter(
          (exercise) =>
            exercise.target === exerciseDetailData.current?.target
        )
        setTargetMuscleExercises(targetMuscleExerciseData)

        const equipmentMuscleExerciseData = exercisesResponse.filter(
          (exercise) =>
            exercise.equipment ===
            exerciseDetailData.current?.equipment
        )
        setEquipmentMuscleExercises(equipmentMuscleExerciseData)
      }
    })()
  }, [id])

  return (
    <Box>
      {exerciseDetailData.current ? (
        <>
          <Detail exerciseDetail={exerciseDetail} />
          <ExerciseVideo
            exerciseVideos={exerciseVideos}
            name={exerciseDetail?.name}
          />
          <SimilarExercises
            targetMuscleExercises={targetMuscleExercises}
            equipmentMuscleExercises={equipmentMuscleExercises}
          />
        </>
      ) : (
        <NotFound />
      )}
      {/* <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos}
        name={exerciseDetail?.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentMuscleExercises={equipmentMuscleExercises}
      /> */}
    </Box>
  )
}

ExerciseDetail.propTypes = {}

export default ExerciseDetail
