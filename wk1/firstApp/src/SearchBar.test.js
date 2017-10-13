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
    wrapper = shallow(
        // You have to provide all the default settings
        <SearchBar
            searchText = ''
            onSearchChange={() => console.log('Hello')}
            inStockOnlyCheck={false}
            onInStockOnlyCheckChange={()=> {
                called = 1
                }}
                />
    )
})

it('when checkbox is checked, the onInStockOnlyChange is called'), () => {
wrapper.find('#instock').simulate('change')
expect(called).toBe(1)

})


it('properly checks the checkbox if inStockOnlyCheck is true'), () => {
checkBoxState = true
console.log('>>', wrapper.find('#instock').props())
console.log('>>', wrapper.find('#instock').html())

// console.log('>>', wrapper.render().find('[value="on"].length)
})