import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
// http://airbnb.io/enzyme/   
// This test suite uses Enzyme
/* globals beforeEach describe it expect */

describe('integration testing', () => {
  let app
  beforeEach(() => {
    app = mount(<App/>)
  })

  it('renders the correct number of filter rows when unfilled', () => {
    const productRows = app.find('ProductRow')
    expect(productRows.length).toBe(6)
  })

  it('renders the right number of category rows', () => {
    const categoryRows = app.find('CategoryRow')
    expect(categoryRows.length).toBe(2)
  })

  it('properly colors items if out of stock', () => {
    const productRows = app.find('ProductRow')
    productRows.forEach((productRow) => {
      const isStocked = productRow.props().record.stocked
      const domElement = productRow.render().find('tr td: first-child')
      const style = domElement[0].attribs.style
      if (isStocked) {
        expect(style).toEqual('color: black;')
      } else {
        expect(style).toEqual('color: red;')
      }
    })
  })
  it('renders the right number of tables row when filtering out of stock', () => {
  // simulate click on the checkbox
  // verify that the length od the products table is lower
    app.find('#instock').simulate('change')
    const productRows = app.find('ProductRow')
    expect(productRows.length).toBe(4)
  })

  it('renders the correct number of product rows when filter product names', () => { // 
    const event = {target: {value: 'i'}}
    // event.target.value === 'cheese'
    app.find('#product-filter').simulate('change', event)
    const productRows = app.find('ProductRow')
    expect(productRows.length).toBe(2)
  })
})
