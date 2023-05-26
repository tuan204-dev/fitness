import {Box, Stack, Typography} from '@mui/material'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'
import styles from './ExerciseVideo.module.scss'

const ExerciseVideo = (props) => {
  const {exerciseVideos, name} = props

  const videoNumbs = 6

  const checkLoading = (content) => {
    if (content) {
      return content
    }
    return Array(videoNumbs).fill(0)
  }

  return (
    <Box sx={{mt: {lg: '100px', xs: '20px'}}} p='20px'>
      <Typography variant='h3' mb='32px'>
        Watch <span>{capitalizeFirstLetter(name)}</span> exercise videos
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
        {checkLoading(exerciseVideos.contents)
          .slice(0, videoNumbs)
          .map((item, index) => (
            <Box
              key={index}
              sx={{
                width: {md: '380px', xs: '100%'},
                maxWidth: {xs: '380px'},
                mt: {xs: '20px'},
              }}
            >
              <a
                href={
                  exerciseVideos.contents &&
                  `https://www.youtube.com/watch?v=${item.video.videoId}`
                }
                className={styles['exercise-video']}
                target='_blank'
                rel='noreferrer'
              >
                {/* <Box overflow='hidden' width='100%' height='fitContent'> */}
                {/* <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                /> */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16 / 9',
                    backgroundImage:
                      exerciseVideos.contents &&
                      `url(${item.video.thumbnails[0].url})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                >
                  {!exerciseVideos.contents && <Skeleton style={{height: '100%'}} />}
                </div>
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
                    {exerciseVideos.contents && item.video.title}
                    {!exerciseVideos.contents && (
                      <Skeleton style={{height: '110%'}} />
                    )}
                  </Typography>
                  <Typography fontSize='14px' variant='h6' color='#000'>
                    {exerciseVideos.contents && item.video.channelName}
                    {!exerciseVideos.contents && <Skeleton style={{width: '20%'}} />}
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
