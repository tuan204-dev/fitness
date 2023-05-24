import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../assets/icons/gym.png'
import {Stack, Typography, useTheme} from '@mui/material'
import styles from './BodyPart.module.scss'

const BodyParts = (props) => {
  const {item, setBodyPart, bodyPart} = props
  const theme = useTheme()
  

  const handleClick = () => {
    setBodyPart(item)
    document.getElementById('exercises-section')?.scrollIntoView()
  }

  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className={styles['bodyPart-card']}
      onClick={handleClick}
      sx={{
        borderTop: bodyPart === item && `4px solid ${theme.palette.primary.main}`,
        position: 'relative',
        backgroundColor: 'fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '282px',
        gap: '47px',
        cursor: 'pointer',
      }}
    >
      <img
        src={Icon}
        alt='body part'
        style={{width: '40px', height: '40px'}}
      />
      <Typography
        fontSize='24px'
        fontWeight='bold'
        color='#3A1212'
        textTransform='capitalize'
      >
        {item}
      </Typography>
    </Stack>
  )
}

BodyParts.propTypes = {}

export default BodyParts
