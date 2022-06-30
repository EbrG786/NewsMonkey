import React, { Component } from 'react'
import spi from '../spinner.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spi} alt="Loading..." />
      </div>
    )
  }
}
