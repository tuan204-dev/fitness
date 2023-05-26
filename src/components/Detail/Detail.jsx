import React from 'react'
import PropTypes from 'prop-types'
import BodyPartImage from '../../assets/icons/body-part.png'
import TargetImage from '../../assets/icons/target.png'
import EquipmentImage from '../../assets/icons/equipment.png'
import {Box, Button, Stack, Typography} from '@mui/material'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './Detail.module.scss'

const Detail = (props) => {
  const {exerciseDetail} = props

  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ]

  return (
    <Stack
      gap='60px'
      justifyContent='start'
      sx={{
        flexDirection: {lg: 'row'},
        p: '20px',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: {lg: '730px'},
          maxWidth: {xs: '300px', md: '400px', lg: '729px'},
          aspectRatio: '1/1',
        }}
      >
        {exerciseDetail ? (
          <img src={gifUrl} alt={name} loading='lazy' style={{width: '100%'}} />
        ) : (
          <Box width='100%' height='100%'>
            <Skeleton style={{height: '100%', width: '100%'}} />
          </Box>
        )}
        {/* <Box width='100%' height='100%'>
          <Skeleton style={{height: '100%', width: '100%'}} />
        </Box> */}
      </Box>
      <Stack flex='1' sx={{gap: {lg: '35px', xs: '20px'}}}>
        <Typography variant='h3'>
          {exerciseDetail ? (
            capitalizeFirstLetter(name)
          ) : (
            <Box width={{lg: '40%', xs: '80%'}}>
              <Skeleton width='100%' />
            </Box>
          )}
        </Typography>
        <Typography variant='h6'>
          {exerciseDetail ? (
            `Exercise keep you strong. ${capitalizeFirstLetter(name)}${' '}
          ${` `} is one of the best exercises to target your ${target}.
          It will help you improve your mood and gain energy.`
          ) : (
            <Skeleton count={3} />
          )}
        </Typography>
        {extraDetail.map((item, index) => (
          <Stack key={index} direction='row' gap='24px' alignItems='center'>
            <Button
              sx={{
                backgroundColor: '#fff2db',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                overflow: 'hidden',
              }}
            >
              {/* <img
                src={item.icon}
                alt={item.name}
                style={{width: '50px', height: '50px'}}
              /> */}
              <Box
                sx={{
                  backgroundImage: exerciseDetail && `url(${item.icon})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  width: '50px',
                  height: '50px',
                  position: 'relative',
                }}
              >
                {!exerciseDetail && (
                  <Skeleton
                    style={{
                      position: 'absolute',
                      top: '-30px',
                      left: '-30px',
                      width: '130px',
                      height: '130px',
                    }}
                  />
                )}
              </Box>
            </Button>
            <Typography variant='h5'>
              {exerciseDetail ? (
                capitalizeFirstLetter(item.name)
              ) : (
                <Skeleton width='150px' height='30px' />
              )}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

Detail.propTypes = {
  exerciseDetail: PropTypes.object.isRequired,
}

export default Detail
