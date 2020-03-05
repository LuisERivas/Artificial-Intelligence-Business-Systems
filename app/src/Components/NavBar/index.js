import React, { Component } from 'react'
import '../NavBar/navBar.css'
import TitleHolder from '../TitleHolder/titleHolder'
import Button from '../Button/button'

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
          <div className='col-2'>

            <TitleHolder />

          </div>
          <div className='col' />
          <div className='col' />
          <div className='col-2'>
            <Button />
          </div>
          <div className='col' />
        </div>
      </div>
    )
  }
}

export default NavBar
