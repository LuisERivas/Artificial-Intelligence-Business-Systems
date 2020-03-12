import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from 'react-router-dom'
import NavBar from './Components/NavBar'
import SideBar from './Components/SideBar/sideBar'

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
      <NavBar />
      <SideBar />
    </Router>
  )
}

export default App
