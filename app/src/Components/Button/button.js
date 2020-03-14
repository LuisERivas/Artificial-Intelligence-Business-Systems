import React, { Component } from 'react'
import '../Button/button.css'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
// import HomePageButtonText from '../HomePageButtonText/homePageButtonText'
// import SideBar from '../SideBar/sideBar.js'

class Button extends Component {
  constructor (props) {
    super()
    this.state = {
      linkSet: props.linkSetIndicator
    }
  }
  render () {
    var buttonSet = this.state.linkSet
    let buttons
    if (buttonSet === 'SideBarSet') {
      buttons = <div className='bg-primary col'>
        <div className='bg-primary row'>
          <button onClick={this.props.clickTestPatientPage} className='btn btn-dark'>{this.props.sideBarLinks.linkName1}</button>
        </div>
        <div className='bg-primary row'>
          <Router>
            <Link to={this.props.sideBarLinks.link2} className='text-light btn btn-danger'>{this.props.sideBarLinks.linkName2}</Link>
          </Router>
        </div>
        <div className='bg-primary row'>
          <Router>
            <Link to={this.props.sideBarLinks.link3} className='text-light btn btn-danger'>{this.props.sideBarLinks.linkName3}</Link>
          </Router>
        </div>
      </div>
    } else if (buttonSet === 'navBarSet') {
      buttons = <div className='bg-primary row'>

        <button onClick={this.props.clickTestDashboard} className='btn btn-danger'>{this.props.navBarLinks.linkName1}</button>
      </div>
    } else {
      console.log('--------- Button --------')
      console.log('there is an eror bro')
      console.log('--------- Button --------')
    }

    return (
      <div className='bg-primary col'>
        {buttons}
      </div>
    )
  }
}
export default Button
