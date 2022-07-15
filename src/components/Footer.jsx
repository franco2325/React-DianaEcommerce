import React from 'react'

import { Link } from 'react-router-dom'
import Grid from './Grid'
import logo from '../assets/images/logo-footer.jpg'

const footerAboutLinks = [
  {
    display: 'About us',
    path: '/about',
  },
  {
    display: 'Contact',
    path: '/about',
  },
  {
    display: 'FAQ',
    path: '/about',
  },
  {
    display: 'Our services',
    path: '/about',
  },
]

const footerCustomerLinks = [
  {
    display: 'Facebook',
    path: '/about',
  },
  {
    display: 'Instagram',
    path: '/about',
  },
  {
    display: 'Twitter',
    path: '/about',
  },
]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className='footer__title'>Ecommerce</div>
            <div className='footer__content'>
              <p>
                Phone: <strong>015234568</strong>
              </p>
              <p>
                Adress: <strong> St. Jhon 412</strong>
              </p>
              <p>
                Email: <strong>francozeballosdev@gmail.com</strong>
              </p>
            </div>
          </div>
          <div>
            <div className='footer__title'>Info</div>
            <div className='footer__content'>
              {footerAboutLinks.map((item, i) => (
                <p key={i}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className='footer__title'>Social</div>
            <div className='footer__content'>
              {footerCustomerLinks.map((item, i) => (
                <p key={i}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className='footer__about'>
            <p>
              <Link to='/'>
                <img src={logo} className='footer__logo' alt='' />
              </Link>
            </p>
            <p>
              Website made with React. <br /> <br />
              <a href='https://github.com/franco2325'> See my Github here.</a>
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer
