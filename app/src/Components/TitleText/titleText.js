import React, { Component } from 'react'
import '../TitleText/titleText.css'

class TitleText extends Component {
  constructor (props) {
    super()
    this.state = {
      titleSet: props.titleIndicator
    }
  }
  render () {
    return (
      <h2 className='my-auto center'>
      Title
      </h2>
    )
  }
}
export default TitleText
