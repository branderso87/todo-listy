import React, { Component } from 'react'

class TodoForm extends Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  handleSubmit (event) {
    event.preventDefault()
    console.log('value', this.state.value)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Todo List
          <input
            name ='todo'
            type ='text'
            placeholder ='Create a New Todo Item'
            value = {this.state.value}
            onChange = {this.handleChange}
          />
        </label>
        <button type='submit'>Create</button>
      </form>
    )
  }
}

export default TodoForm
