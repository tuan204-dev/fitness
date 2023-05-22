import React from 'react'
import PropTypes from 'prop-types'

import BodyPartImage from '../../assets/icons/body-part.png'
import TargetImage from '../../assets/icons/target.png'
import EquipmentImage from '../../assets/icons/equipment.png'
import {Box, Button, Stack, Typography} from '@mui/material'
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
      justifyContent='center'
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
          // flex: '1',
          maxWidth: {xs: '300px', md: '400px', lg: '729px'},
          // height: {xs: '300px', md: '400px', lg: '742px'},
        }}
      >
        <img
          src={gifUrl}
          alt={name}
          loading='lazy'
          style={{ width: '100%'}}
        />
      </Box>
      <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
        <Typography variant='h3'>{name}</Typography>
        <Typography variant='h6'>
          Exercise keep you strong. {name} {` `} is one of the best
          exercises to target your {target}. It will help you improve
          your mood and gain energy.
        </Typography>
        {extraDetail.map((item, index) => (
          <Stack
            key={index}
            direction='row'
            gap='24px'
            alignItems='center'
          >
            <Button
              sx={{
                backgroundColor: '#fff2db',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{width: '50px', height: '50px'}}
              />
            </Button>
            <Typography variant='h5'>{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

Detail.propTypes = {}

export default Detail
