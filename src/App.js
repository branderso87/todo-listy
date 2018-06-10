import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super ()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e, values){
    e.preventDefault()
    console.log('values')
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>TODO</label>
          <input name='todo' type='text' placeholder='Create New Todo' />
          <button type='submit'>Create</button>
        </form>
      </div>
    )
  }
}

export default App

//ToDo List:
//1. Create a Todo
//2. List All Todos
//3. Complete Todos
//4. Delete Todos
