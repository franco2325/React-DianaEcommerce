import React from 'react'
import logo from '../assets/images/me.png'

const AboutMeCard = () => {
  return (
    <div>
      <div className='about__me__card'>
        <div className='about__me__card__img'>
          <img src={logo} alt='' />
        </div>
        <div className='about__me__card__info'>
          <div className='about__me__card__info__about'>
            {' '}
            <i className='bx bx-user-pin'></i> <h2>Franco Zeballos</h2>
          </div>
          <div className='about__me__card__info__about'>
            {' '}
            <i className='bx bxl-whatsapp'></i> <h2>+543512519640</h2>
          </div>
          <div className='about__me__card__info__about'>
            {' '}
            <i className='bx bxs-file-html'></i>
            <a href='https://francozeballos.netlify.app/'>
              {' '}
              <h3>See my web here.</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeCard
