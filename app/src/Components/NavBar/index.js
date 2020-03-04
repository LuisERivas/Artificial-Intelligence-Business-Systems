import React, { Component } from 'react'
import '../NavBar/navBar.css'
import TitleHolder from '../TitleHolder/titleHolder'

class NavBar extends Component {
  render () {
    return (
      <div className='navBar'>
        <div className='row h-100'>

          <div className='col' />
          <div className='col' />
          <div className='col' />
          <div className='col' />
          <div className='col' />
          <div className='col-2 bg-danger'>

            <TitleHolder />

          </div>
          <div className='col' />
          <div className='col' />
          <div className='col-2 text-center bg-danger'> button here
          </div>
          <div className='col' />
        </div>
      </div>
    )
  }
}

export default NavBar
