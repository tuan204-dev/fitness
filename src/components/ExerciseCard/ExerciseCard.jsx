import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Box, Button, Stack, Typography, useTheme} from '@mui/material'
import styles from './ExerciseCard.module.scss'
import Skeleton from 'react-loading-skeleton'

const ExerciseCard = (props) => {
  const {exercise} = props
  const theme = useTheme()
  // console.log('im here 2')

  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Link
      style={
        exercise
          ? {
              borderTop: `4px solid ${theme.palette.primary.main}`,
            }
          : {}
      }
      onClick={handleScrollToTop}
      className={styles['exercise-card']}
      to={exercise && `/exercise/${exercise.id}`}
    >
      {/* <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' /> */}
      <Box
        sx={{
          width: '100%',
          aspectRatio: '1 / 1',
          background: exercise && `url(${exercise.gifUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {!exercise && <Skeleton height='100%' width='100%' />}
      </Box>
      <Stack direction='row'>
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#ffa9a9',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {exercise ? (
            exercise.bodyPart
          ) : (
            <Skeleton style={{position: 'absolute', top: '-10px', left: '-10px', width: '90px', height: '60px'}}/>
          )}
        </Button>
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#fcc757',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {exercise ? (
            exercise.target
          ) : (
            <Skeleton style={{position: 'absolute', top: '-10px', left: '-10px', width: '90px', height: '60px'}}/>
          )}
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
        position='relative'
      >
        {exercise ? (
            exercise.name
          ) : (
            <Skeleton style={{position: 'absolute', top: '0', left: '0', width: '70%', height: '70%'}}/>
          )}
      </Typography>
    </Link>
  )
}

ExerciseCard.propTypes = {
  exercise: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
}

export default ExerciseCard
