import React, { Component } from 'react'
import '../ButtonTest/buttonTest.css'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import Button from '../Button/button'
function ButtonSelection (props) {
  return <h1>dude, {props.name}</h1>
}
// const element = <buttonSelection name='bobby' />

class ButtonTest extends Component {
  constructor (props) {
    super(props)
    this.state = {
      linkName1: 'dave',
      link1: '/dave',
      link2: 'jamie'
    }
  }
  render () {
    return (
      <div className=' bg-dark'>
        <Button />
      </div>
    )
  }
}
export default ButtonTest
