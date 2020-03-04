import React, { Component } from 'react'
import '../TitleHolder/titleHolder.css'
import TitleText from '../TitleText/titleText.js'

class TitleHolder extends Component {
  render () {
    return (
      <div className='titleHolderColor fullHeight row'>
        {/* <div className='bg-light centerTest'> */}
        <TitleText />
        {/* </div> */}
      </div>
    )
  }
}

export default TitleHolder
