import {Box, Stack, Typography} from '@mui/material'
import React from 'react'
import Loader from '../Loader/Loader'
import styles from './ExerciseVideo.module.scss'

const ExerciseVideo = (props) => {
  const {exerciseVideos, name} = props

  if (!Object.keys(exerciseVideos).length) return <Loader />

  return (
    <Box sx={{mt: {lg: '100px', xs: '20px'}}} p='20px'>
      <Typography variant='h3' mb='32px'>
        Watch{' '}
        <span color='primary' style={{ textTransform: 'capitalize'}}>
          {name}
        </span>{' '}
        exercise videos
      </Typography>
      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{
          flexDirection: {lg: 'row', md: 'row'},
          gap: {lg: '90px', md: '50px', xs: '20px'},
          justifyContent: 'space-around',
        }}
      >
        {exerciseVideos.contents?.slice(0, 6).map((item, index) => (
          <Box
            key={index}
            sx={{
              width: {md: '380px', xs: '100%'},
              maxWidth: {xs: '380px'},
              mt: {xs: '20px'}
            }}
          >
            <a
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              className={styles['exercise-video']}
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <Box>
                <Typography
                  sx={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    lineClamp: '2',
                    boxOrient: 'vertical',
                    WebkitBoxOrient: 'vertical',
                  }}
                  fontSize='28px'
                  fontWeight='600'
                  variant='h5'
                  color='#000'
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize='14px' variant='h6' color='#000'>
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

ExerciseVideo.propTypes = {}

export default ExerciseVideo
