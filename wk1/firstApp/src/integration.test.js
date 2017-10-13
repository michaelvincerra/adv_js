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
    // You must use .render() if you want to find DOM elements ONLY
    // On the other hand you want to search for HTML elements, omit .render()
    const productRows = app.find('ProductRow')
    expect(productRows.length).toBe(6)
  })

  it('renders the right number of category rows', () => {
    const categoryRows = app.find('CategoryRow')
    expect(categoryRows.length).toBe(2)
  })

  it('uses proper color if item is out of stock', () => {
    const productRows = app.find('ProductRow')
    productRows.forEach((productRow) => {
      // productRow.render().find('tr td: first-child')
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
  
  it('renders the right number of tables row when filter out of stock')
    // simulate click on the checkbox
    // verify that the length od the products table is lower
  app.find('#instock').simulate('change')
  const productRows = app.find('ProductRow')
  expect(productRows.length).toBe(4)

  })
  it('renders the correct number of product row ')
  // 
  const event = {target: {value: 'cheese'}}
  // event.target.value === 'cheese'
  app.find("#product-filter").simulate('change')

// FInish this!!!

})

/* to test in the command line: -- -- coverage */