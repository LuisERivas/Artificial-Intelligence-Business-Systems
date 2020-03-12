import React, { Component } from 'react'
import '../NavBar/navBar.css'
import TitleHolder from '../TitleHolder/titleHolder'
import Button from '../Button/button'

class NavBar extends Component {
  render () {
    var navBarLinks = {
      linkName1: 'Dasboard',
      link1: '/'
    }
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
            <Button navBarLinks={navBarLinks} linkSetIndicator={'navBarSet'} />
          </div>
          <div className='col' />
        </div>
      </div>
    )
  }
}

export default NavBar
