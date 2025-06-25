import React from 'react'
import logo from '../../assets/iSchool.png'
import PropTypes from 'prop-types'

const Logo = ({width}) => {

    const logoWidth = {
        width: width
    }

  return (
    <div style={logoWidth} className="logo">
        <img className='max-w-[100%]' src={logo} alt='Logo' />
    </div>
  )
}

Logo.propTypes = {
    width: PropTypes.string.isRequired
}

export default Logo
