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
    // this.onTest = this.onTest.bind(this)
    this.onDashboardClicked = this.onDashboardClicked.bind(this)
    this.onCreatePatientClicked = this.onCreatePatientClicked.bind(this)
  }
  // onTest () {
  //   console.log('BRO IT FUCKING WORKED')
  //   this.setState(state => ({
  //     pageState: 'ugly boi'
  //   }))
  // }
  onDashboardClicked () {
    console.log('BRO IT FUCKING WORKED')
    this.setState(state => ({
      pageState: 'Dashboard'
    }))
  }
  onCreatePatientClicked () {
    console.log('bro, we found the create patient page')
    this.setState(state => ({
      pageState: 'Create Patient'
    }))
  }
  //   superTest () {
  //     console.log('this is a risk but lets see')
  //   }
  render () {
    // console.log('--------- DashBoard --------')
    // console.log('Current Page State: ' + this.state.pageState)
    var pageSetter = this.state.pageState
    // console.log('testing pageSetter var: ' + pageSetter)
    let currentPage
    // console.log('--------- DashBoard --------')

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
          // test={this.onTest}
          supertesto={this.superTest}
          page={this.state.pageState}
          dashboardClicked={this.onDashboardClicked}
          // createPatientClicked={this.onCreatePatientClicked}
        />
        <SideBar
          createPatientClicked={this.onCreatePatientClicked}
        />
        {currentPage}
        <button className='btn btn-danger'>change page here</button>
      </div>
    )
  }
}
export default Dashboard
