import React, {Component } from 'react'

export default class ProductRow extends Component {
  render () {
    let textColor
    if (!this.props.record.stocked) {
      textColor = {color: 'red'} // textColor needs to be declared as an object per REACT
    } else {
      textColor = {color: 'black'} // textColor needs to be declared as an object per REACT
    }
    const key = this.props.record.category + this.props.record.name
    return (
      <tr key={key}><td style={textColor}>{this.props.record.name}</td><td>{this.props.record.price}</td></tr>
    )
  }
}
