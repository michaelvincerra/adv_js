import React, {Component} from 'react'

export default class CategoryRow extends Component {
  render () {
    return (
      <tr key={this.props.currentCategory}><th colspan={2}>{this.props.currentCategory}</th></tr>
    )
  }
}
