import React, { Component } from 'react'
import '../Dashboard/dashboard.js'
import NavBar from '../NavBar/index.js'
import SideBar from '../SideBar/sideBar'
import HomePage from '../HomePage/home.js'
import CreatePatientPage from '../CreatePatientPage/createPatientpage.js'

class Dashboard extends Component {
  constructor (props) {
    super()
    this.state = {
      pageState: props.pageStateInitial,
      status: 0
    }
    this.onDashboardClicked = this.onDashboardClicked.bind(this)
    this.onCreatePatientClicked = this.onCreatePatientClicked.bind(this)
  }
  onDashboardClicked () {
    console.log('BRO IT FUCKING WORKED')
    this.setState(state => ({
      pageState: 'Dashboard'
    }))
  }
  onCreatePatientClicked () {
    // console.log('bro, we found the create patient page')
    this.setState(state => ({
      pageState: 'Create Patient'
    }))
  }

  render () {
    var pageSetter = this.state.pageState

    let currentPage

    if (pageSetter === 'Dashboard') {
      currentPage = <HomePage />
    } else if (pageSetter === 'Create Patient') {
      currentPage = <CreatePatientPage />
    } else {
      console.log('*WARNING* *WARNING* *WARNING*')
      console.log('Something is wrong with the page state')
      console.log('*WARNING* *WARNING* *WARNING*')
    }
    return (
      <div className='bg-dark text-light'>
        <NavBar
          supertesto={this.superTest}
          page={this.state.pageState}
          dashboardClicked={this.onDashboardClicked}
        />
        <SideBar
          createPatientClicked={this.onCreatePatientClicked}
        />
        {currentPage}
      </div>
    )
  }
}
export default Dashboard
