import React, { Component } from 'react'
import '../Button/button.css'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import HomePageButtonText from '../HomePageButtonText/homePageButtonText'

class Button extends Component {
  render () {
    return (
      <div className=''>
        <Router>
          <Link to='/' className='text-dark'> <HomePageButtonText /> </Link>
        </Router>
      </div>
    )
  }
}
export default Button
