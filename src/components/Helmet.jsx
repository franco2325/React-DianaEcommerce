import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

const Helmet = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  document.title = 'Diana - ' + props.title

  return <div>{props.children}</div>
}

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Helmet
