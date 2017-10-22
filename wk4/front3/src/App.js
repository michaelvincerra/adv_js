import React, { Component } from 'react'

const INITIAL_STATE = {
  userSpew: '',
  newSpew: ''
}

class App extends Component {
  // From inside of the class, you don't need to include the 'function' keyword
  // constructor is a function. It's like the dunder init: __self__
  constructor (props) {
    super(props)

    this.state = INITIAL_STATE

    // This step is necessary because we call a function
    this.front3 = this.front3.bind(this)
    this.updateUserSpew = this.updateUserSpew.bind(this)
    this.wipeSpew = this.wipeSpew.bind(this)
  }
 
  updateUserSpew (event) {
    this.setState({userSpew: event.target.value})
  }

  wipeSpew () {
    this.setState(INITIAL_STATE) // Don't use {} braces inside the parentheses. Global  
  }

  // front3 (word)  {
  //   const newWord = word.slice(0, 3).repeat(3)
  //   return newWord
  // }
  // From inside of the class, you don't need to include the 'function' keyword
  // If you're using a function that's called anywhere, then bind it above in the CONSTRUCTOR
  front3 () {
    const newSpew = this.state.userSpew.slice(0, 3).repeat(3)
    this.setState({newSpew}) // ,() => {} // creates a callback that is called when state has been SET 
  }

  render () {
    return (
      <div>
        <input type='text'
          id='wordInput'
          onChange={this.updateUserSpew}
          value={this.state.userSpew}
        />

        <button type='button'
          id='goButton'
          onClick={this.front3}
        > Repeat first 3 chars! </button>

        <button type='button'
          id='clearButton'
          onClick={this.wipeSpew} // References the function above
        > Clear! </button>

        <h1 id='output'>  Answer ==> {this.state.newSpew}</h1>

      </div>
    )
  }
}

export default App
// Understand state: It's the dictionary that lives in the class. 
// How do you access State? Use an update function 
// In the constuctor(), we define how the object is defined. 