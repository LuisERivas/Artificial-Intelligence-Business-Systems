import React from 'react'
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/Workspace'>workspace </Link>
          </li>
          <li>
            <Link to='/CreateNewPatient'>Create new patient </Link>
          </li>
          <li>
            <Link to='/PatientList'>Patient List </Link>
          </li>
          <li>
            <Link to='/AlphabeticSearch'>Alphabetic Search </Link>
          </li>
          <li>
            <Link to='/PatientPage'>PatientPage </Link>
          </li>
        </ul>
      </div>
    </Router>
  )
}

export default App
