import React, { useState, useEffect } from 'react'
import './resources/Landing.css'
import SocialLinks from './SocialLinks'

const Landing = () => {
  const [imgSrc, setImgSrc] = useState('https://res.cloudinary.com/dtweazqf2/image/upload/h_400,w_auto,c_fill/e_blur:1000,q_1,f_auto/v1598539247/Original_FWLR_Landing_obgvba.jpg')
  const hdSrc = 'https://res.cloudinary.com/dtweazqf2/image/upload/h_600,w_auto,f_auto,q_auto,g_auto,e_sharpen,c_fill/dpr_3.0/v1598539247/Original_FWLR_Landing_obgvba.jpg'
  //
  useEffect(() => {
    const hdImg = new Image()
    hdImg.src = hdSrc
    hdImg.onload = () => setImgSrc(hdSrc)
  }, [hdSrc])

  return (
    <div className='landing-container'>
      <div className='landing-image'>
        <img
          src={imgSrc}
          alt='Producer Nick Fowler poses atop his Talon car'
        />
      </div>
      <div className='landing-logo'>
        <img src='https://res.cloudinary.com/dtweazqf2/image/upload/h_220,f_auto,q_auto,c_fit/v1598717124/Original_FWLR_Logo_o4poxg.png' alt='Fowler logo' />
      </div>
      <SocialLinks />
    </div>
  )
}

export default Landing
