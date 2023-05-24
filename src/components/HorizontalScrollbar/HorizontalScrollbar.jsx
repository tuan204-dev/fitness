import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material/'
import {Box, Button, useTheme} from '@mui/material'
import PropTypes from 'prop-types'
import React, {useRef} from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard'
import BodyPart from '../BodyPart/BodyPart'
import Loader from '../Loader/Loader'

const arrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  px: '0px',
  py: '16px',
  borderRadius: '20px',
  '&:hover:active': {
    backgroundColor: 'transparent',
  },
}

const responsive = {
  xl: {
    breakpoint: {max: 4000, min: 1536},
    items: 4,
  },
  lg: {
    breakpoint: {max: 1536, min: 1200},
    items: 3,
  },
  md: {
    breakpoint: {max: 1200, min: 900},
    items: 2,
  },
  sm: {
    breakpoint: {max: 900, min: 600},
    items: 1,
  },
  xs: {
    breakpoint: {max: 600, min: 0},
    items: 1,
  },
}

const CustomRightArrow = ({onClick}) => {
  const theme = useTheme()

  return (
    <Button
      onClick={onClick}
      sx={{
        ...arrowStyle,
        color: `${theme.palette.primary.main}`,
        right: '20px',
      }}
    >
      <ArrowForwardIos />
    </Button>
  )
}

const CustomLeftArrow = ({onClick}) => {
  const theme = useTheme()

  return (
    <Button
      onClick={onClick}
      sx={{
        ...arrowStyle,
        color: `${theme.palette.primary.main}`,
        left: '20px',
      }}
    >
      <ArrowBackIos />
    </Button>
  )
}

const HorizontalScrollbar = (props) => {
  const {data, bodyPart, setBodyPart, isBodyParts} = props
  if (data.length === 0) {
    return <Loader />
  }

  return (
    <Carousel
      responsive={responsive}
      draggable={false}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {data.map((item, index) => {
        return (
          <Box
            key={item.id || index}
            m='0 40px'
            sx={{
              display: {xs: 'flex'},
              justifyContent: {xs: 'center'},
            }}
          >
            {isBodyParts && (
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            )}
            {!isBodyParts && (
              <>
                <ExerciseCard exercise={item} />
              </>
            )}
          </Box>
        )
      })}
    </Carousel>
  )
}

HorizontalScrollbar.propTypes = {
  data: PropTypes.array.isRequired,
  bodyPart: PropTypes.string,
  setBodyPart: PropTypes.func,
  isBodyParts: PropTypes.bool,
}

HorizontalScrollbar.defaultProps = {
  bodyPart: '',
  setBodyPart: null,
  isBodyParts: true,
}

export default HorizontalScrollbar