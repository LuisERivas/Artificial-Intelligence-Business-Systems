import React, { Component } from 'react'
import '../NavBar/navBar.css'
import TitleHolder from '../TitleHolder/titleHolder'
import Button from '../Button/button'

class NavBar extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     currentTitle: 'Dashboard'
  //   }
  // }
  // onChangeTitleName (newTitle) {
  //   this.setState({
  //     currentTitle: newTitle
  //   })
  // }
  constructor (props) {
    super()
    // this.state = {}
    //   pageState: props.pageStateInitial,
    //   status: 0
    // }
    // this.onClickTesting = this.onClickTesting.bind(this)
    this.onDashboradClickedTesting = this.onDashboradClickedTesting.bind(this)
    // this.onCreatePatientClickedTesting = this.onCreatePatientClickedTesting.bind(this)
  }
  // ifClickTestingRan () {
  //   console.log('idk if this is usesfull')
  //   this.props.test()
  // }
  // onClickTesting () {
  //   console.log('im testing onClickingTesting function')
  //   // this.ifClickTestingRan()
  //   this.props.test()
  // }
  onDashboradClickedTesting () {
    console.log('im testing if dashboard button was clicked')
    this.props.dashboardClicked()
  }
  // onCreatePatientClickedTesting () {
  //   console.log('im testing if the create patient button has be pressed')
  //   this.props.createPatientClicked()
  // }
  render () {
    // console.log('TEST: ' + this.state.currentTitle)
    // console.log('this is another TEST MY DUDE ' + this.props.page)
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

            <TitleHolder
              // currentTitle={this.state.currentTitle}
              currentTitle={this.props.page}
              // changeTitle={this.onChangeTitleName.bind(this)}
            />

          </div>
          <div className='col' />
          <div className='col' />
          <div className='col-2'>
            <Button navBarLinks={navBarLinks}
              linkSetIndicator={'navBarSet'}
              clickTest={this.onClickTesting}
              // clickTestPatientPage={this.onCreatePatientClickedTesting}
              clickTestDashboard={this.onDashboradClickedTesting}
            />
            {/* <button
              onClick={this.props.test}
              className='btn btn-dark'
            > Testt
            </button> */}
          </div>
          <div className='col' />
        </div>
      </div>
    )
  }
}

export default NavBar
