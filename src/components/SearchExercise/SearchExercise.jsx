import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import fetchLocalData from '../../utils/fetchLocalData'
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar'

// Perform fetch data
const SearchExercise = (props) => {
  const {bodyPart, setBodyPart, setExercises} = props

  const [searchValue, setSearchValue] = useState('')
  const [bodyParts, setBodyParts] = useState([])
  const theme = useTheme()
  // console.log(bodyParts)

  useEffect(() => {
    ;(async () => {
      const bodyPartsData = await fetchLocalData(
        'data/bodyParts.json'
      )
      setBodyParts(['all', ...bodyPartsData])
    })()
  }, [])

  const handleSearchClick = async () => {
    if (searchValue) {
      const exercisesData = await fetchLocalData('data/exercises.json')

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchValue) ||
          exercise.target.toLowerCase().includes(searchValue) ||
          exercise.bodyPart.toLowerCase().includes(searchValue) ||
          exercise.equipment.toLowerCase().includes(searchValue)
      )

      setSearchValue('')
      setExercises(searchedExercises)

      document.getElementById('exercises-section')?.scrollIntoView()
    }
  }

  useEffect(() => {
    ;(async () => {
      const exercisesResponse = await fetchLocalData(
        '/data/exercises.json'
      )

      let exercisesData

      console.log(bodyPart)
      bodyPart === 'all'
        ? (exercisesData = exercisesResponse)
        : (exercisesData = exercisesResponse.filter(
            (exercise) => exercise.bodyPart === bodyPart
          ))

      setExercises(exercisesData)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyPart])

  return (
    <Stack
      alignItems='space-between'
      mt='37px'
      justifyContent='center'
      p='20px'
    >
      <Typography
        fontWeight='700'
        mb='50px'
        textAlign='center'
        sx={{fontSize: {lg: '44px', xs: '30px'}}}
      >
        Awesome Exercise You <br />
        Should know
      </Typography>
      <Stack mb='72px' direction={{lg: 'row'}}>
        <TextField
          height='76px'
          value={searchValue}
          onChange={(e) =>
            setSearchValue(e.target.value.toLowerCase())
          }
          onKeyUp={(e) => {
            e.key === 'Enter' && handleSearchClick()
          }}
          placeholder='Search Exercises'
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
            },
            flex: '1',
            bgcolor: '#fff',
            borderRadius: '40px',
          }}
          color='primaryBlur'
        />
        <Button
          sx={{
            width: {lg: '175px'},
            fontSize: {lg: '20px', xs: '14px'},
            bgcolor: `${theme.palette.primary.main}`,
            color: '#fff',
            textTransform: 'none',
            height: '56px',
            m: {xs: '10px 0 0 0', lg: '0 0 0 20px'},
          }}
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </Stack>
      <Box position='relative' width='100%' p='20px'>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts={true}
        />
      </Box>
    </Stack>
  )
}

SearchExercise.propTypes = {
  bodyPart: PropTypes.string,
  setBodyPart: PropTypes.func,
  setExercises: PropTypes.func,
}

SearchExercise.defaultProps = {
  bodyPart: '',
  setBodyPart: null,
  setExercises: null,
}

export default SearchExercise
