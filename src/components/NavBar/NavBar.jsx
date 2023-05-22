import React from 'react'
import PropTypes from 'prop-types'
import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import styles from './NavBar.module.scss'
import classNames from 'classnames/bind'

import logo from '../../assets/images/Logo.png'

const cx = classNames.bind(styles)

const NavBar = (props) => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{
        gap: {sm: '122px', xs: '40px'},
        mt: {sm: '32px', xs: '20px'},
        justifyContent: 'none',
      }}
      px='20px'
    >
      <Link to='/'>
        <img src={logo} alt='Logo' className={cx('logo')} />
      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontFamily='Alegreya'
        fontSize='24px'
        alignItems='flex-end'
      >
        <Link to='/' className={cx({link: true, 'home-link': true})}>
          Home
        </Link>
        <a href='#exercises' className={cx('link')}>
          Exercises
        </a>
      </Stack>
    </Stack>
  )
}

NavBar.propTypes = {}

export default NavBar
