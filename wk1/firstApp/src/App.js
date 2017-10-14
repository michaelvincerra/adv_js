import React, { Component } from 'react'
import './App.css'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

// compare provides a sort method to ensure that categories aren't mixed, and to ensure that when new
// categories are added, they are represented in distinct sections. 
const compare = (recordA, recordB) => {
  if (recordA.category < recordB.category) {
  }
  if (recordB.category > recordA.category) {
    return 1
  }
  // a must be equal to b
  return 0
}
// THis will take the Component to be used by all children that are stateless. 
// THis will take the Component to be used by all children that are stateless. 

class App extends Component {
  // constructor initalizes a stateful component
  constructor (props) {
    super(props)
    // This stores items in the list and defines default values
    this.state = {
      inStockOnlyCheck: false,
      searchText: '',
      data: []
    }
    this.changeInStockOnlyCheck = this.changeInStockOnlyCheck.bind(this)
    this.changeSearchText = this.changeSearchText.bind(this)
  }
  // 'data' below could also be the entry point for an API. 
  componentWillMount () {
    this.setState({data: [
      {category: 'Pasta', price: '$3.99', stocked: true, name: 'Farfalle'},
      {category: 'Pasta', price: '$4.99', stocked: true, name: 'Strozzapreti'},
      {category: 'Climbing Gear', price: '$89.99', stocked: true, name: 'Harness'},
      {category: 'Climbing Gear', price: '$14.99', stocked: true, name: 'Carabiner'},
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ].sort(compare)})
  }

  changeSearchText (e) {
    // setState is used to update the internal component state for App
    this.setState({searchText: e.target.value})
  }
  changeInStockOnlyCheck () {
    // setState is used to update the internal component state for App
    this.setState({inStockOnlyCheck: !this.state.inStockOnlyCheck})
  }
  /* return statement defines the browser presentation with HTML injected; and includes use of 'state' above */ 
  render () {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchChange={this.changeSearchText}
          inStockOnlyCheck={this.state.inStockOnlyCheck}
          onInStockOnlyCheckChange={this.changeInStockOnlyCheck}
        />
        <br/>
        <ProductTable
          inStockOnlyCheck={this.state.inStockOnlyCheck}
          searchText={this.state.searchText}
          data={this.state.data}
        />
      </div>
    )
  }
}
/* for (let i = 0; i < filteredData.length; i++) {
    //   let record = filteredData[i]
    //   // ternary  statement is a more succinct option
    //   // const textColor = record.stocked ? {color: 'black'} : {color: 'red'} 
    //   let textColor // declare variable without the ";" because it's Standard JS
    //   if (record.stocked === true) {
    //     textColor = {color: 'black'} // textColor needs to be declared as an object per REACT
    //   } else {
    //     textColor = {color: 'red'} // textColor needs to be declared as an object per REACT
    //   };
    //   // Because currentCategory is declared as 'null' we use definition by negation to initiate the logical comparison
    //   if (record.category !== currentCategory) {
    //     currentCategory = record.category
    //     if (record.stocked || !this.state.inStockOnlyCheck) {
    //       const ckey = keyGenerator('category', i)
    //       rows.push(<tr key={ckey}><th>{currentCategory}</th></tr>)
    //     }
    //   }
    //   const rkey = keyGenerator('row', i)
    //   rows.push(<tr key={rkey}style={textColor}><td>{record.name}</td><td>{record.price}</td></tr>)
    // }
    End For Loop */
export default App
