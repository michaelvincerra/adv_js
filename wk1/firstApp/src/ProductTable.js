import React, {Component } from 'react'
import ProductRow from './ProductRow'
import CategoryRow from './CategoryRow'

export default class ProductTable extends Component {
  render () {
    const rows = []
    let currentCategory = null
    /* */
    const filteredData = this.props.data.filter((record) => {
      const lowerCaseRecordName = record.name.toLowerCase()
      const lowerCaseSearchText = this.props.searchText.toLowerCase()
      return lowerCaseRecordName.includes(lowerCaseSearchText)
    })

    filteredData.forEach((record) => {
      if (record.category !== currentCategory) {
        currentCategory = record.category
        rows.push(<CategoryRow currentCategory={currentCategory}/>)
      }
      if (record.stocked || !this.props.inStockOnlyCheck) {
        rows.push(<ProductRow record={record}/>)
      }
    })
    return (
      <table>
        <tbody>
          <tr>
            <th> Name</th><th>Price</th>
          </tr>
          {rows}
        </tbody>
      </table>
    )
  }
} 
