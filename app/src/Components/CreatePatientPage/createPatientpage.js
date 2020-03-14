import React, { Component } from 'react'
import '../CreatePatientPage/createPatientPage.css'
import CreatePatientForm from '../CreatePatientForm/createPatientForm'

class CreatePatientPage extends Component {
  render () {
    return (
      <div className='bg-danger'>
        <div className='row'>
          <div className='col-2' />
          <div className='col bg-dark'><CreatePatientForm /> </div>
          <div className='col-2' />
        </div>
      </div>
    )
  }
}

export default CreatePatientPage
