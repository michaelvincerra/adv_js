import React from 'react'
import ReactDOM from 'react-dom'
import App from './SearchBar'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter() })

/* globals beforeEach describe it expect */

describe('integration testing', () => {
let called
let wrapper
let checkBoxState = false 

beforeEach(() => { 



)}