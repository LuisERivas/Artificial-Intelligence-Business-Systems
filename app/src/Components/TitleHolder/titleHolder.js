import React, { Component } from 'react'
import '../TitleHolder/titleHolder.css'
// import TitleText from '../TitleText/titleText.js'

class TitleHolder extends Component {
  render () {
    console.log('--------- Title Holder --------')

    console.log('Testing push prop down from navbar: ' + this.props.currentTitle)

    console.log('--------- Title Holder --------')

    var title
    title = this.props.currentTitle
    return (
      <div className='titleHolderColor fullHeight row'>
        {title}
      </div>
    )
  }
}

export default TitleHolder
