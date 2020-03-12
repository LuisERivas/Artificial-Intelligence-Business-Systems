import React, { Component } from 'react'
import '../HomePageButtonText/homePageButtonText.css'

class HomePageButtonText extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     link1: 'bob',
  //     link2: 'billy'
  //   }
  // }
  render () {
    return (
      <div className='buttonColor'>
        <h2 className='text-center'>Dashboard</h2>
        {/* <h2>{this.state.link1}</h2> */}
      </div>
    )
  }
}
export default HomePageButtonText
