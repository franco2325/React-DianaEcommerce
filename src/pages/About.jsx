import React from 'react'
import AboutMeCard from '../components/AboutMeCard'
import Helmet from '../components/Helmet'

const About = () => {
  return (
    <Helmet title='About'>
      <div className='main container'>
        <AboutMeCard />
        <div className='about__info'>
          <a href='https://github.com/franco2325'>
            <h2>See my github</h2>
          </a>
        </div>
      </div>
    </Helmet>
  )
}

export default About
