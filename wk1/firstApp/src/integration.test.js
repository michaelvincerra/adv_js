import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// http://airbnb.io/enzyme/   
// This test suite uses Enzyme
/* globals beforeEach describe it expect */

describe('integration testing', () => {
  let App
  beforeEach(() => {
    app = mount(<App/>)
    })

it('renders the correct number of filter rows when unfilled', () => {
    // You must use .render() if you want to find DOM elements ONLY
    // On the other hand you want to search for HTML elements, omit .render()
    const productRows = app.render().find('.product-rows')
    expect(true).toBe(true) 
    expect(productRows.length).toBe(6)
    
})

it('It has the right number of category rows', () => {
    const categoryRows = app.find('CategoryRow')
    expect(categoryRows.length).toBe(2)
})

it('It uses red if the item is out of stock', () => {
    const productRows = app.find('ProductRow')
    productRows.forEach((productRow) => {
      const isStocked = productRows.props().records.stocked
      const domElement = productRows.render().find('tr td: first-child')
      const style = domElement[0].attribs.style
      if(isStocked) {
        expect(style).toEqual('color: black;')
      }else{
        expect(style).toEqual('color: red;')
        
      }
      }
    )
}


/* to test in the command line: -- -- coverage */