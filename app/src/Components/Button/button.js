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
    // console.log(this.props.sideBarLinks)
    // console.log(this.state.linkSet)
    var buttonSet = this.state.linkSet
    console.log('The current Button set is: ' + buttonSet)
    let buttons
    if (buttonSet === 'SideBarSet') {
      console.log('I Successfully pulled up the SideBarSet')
      buttons = <div className='bg-primary col'>
        <div className='bg-primary row'>
          <Router>
            <Link to={this.props.sideBarLinks.link1} className='text-light btn btn-danger'>{this.props.sideBarLinks.linkName1}</Link>
          </Router>
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
      console.log('I pulled up the NavbarSet')
      buttons = <div className='bg-primary row'>
        <Router>
          <Link to={this.props.navBarLinks.link1} className='text-light btn btn-danger'>{this.props.navBarLinks.linkName1}</Link>
        </Router>
      </div>
    } else {
      console.log('there is an eror bro')
    }

    return (
      <div className='bg-primary col'>
        {buttons}
      </div>
    )
  }
}
export default Button
