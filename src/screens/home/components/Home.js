import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Home = memo(() => (
  <>
    <Link to="/form">Form</Link>
  </>
))

export default Home
