import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'
import styles from './ExerciseCard.module.scss'


const ExerciseCard = (props) => {
  const {exercise} = props

  // console.log('im here 2')

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <Link onClick={handleScrollToTop} className={styles['exercise-card']} to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack direction='row'>
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#ffa9a9',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#fcc757',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml='21px'
        color='#000'
        fontWeight='bold'
        mt='11px'
        pb='10px'
        textTransform='capitalize'
        fontSize='20px'
      >
        {exercise.name}
      </Typography>
    </Link>
  )
}

ExerciseCard.propTypes = {
  exercise: PropTypes.object.isRequired,
}

export default ExerciseCard
