import React, { Component } from 'react'
import '../SideBar/sideBar.css'
import Button from '../Button/button.js'
// import ButtonTest from '../ButtonTest/buttonTest'

class SideBar extends Component {
  render () {
    var sideBarLinks = {
      linkName1: 'Create Patient',
      link1: '/CreatePatient',
      linkName2: 'Patient Search',
      link2: '/PatientSearch',
      linkName3: 'Patient List',
      link3: '/PatientList'
    }
    return (
      <div className='float-left bg-danger'>
        <div className=''>
          <h1 className='h-100'>
            Side Bar
          </h1>

          <Button sideBarLinks={sideBarLinks} linkSetIndicator={'SideBarSet'} />
          {/* <ButtonTest /> */}
        </div>
      </div>
    )
  }
}
export default SideBar
