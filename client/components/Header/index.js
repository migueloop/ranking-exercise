
import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'

class Header extends Component {

  constructor(props, context) {
    super(props, context)
  }

  handleSave(text) {
    if (text.length) {
      this.props.actions.addTodo(text)
    }
  }


  render() {
    const { actions } = this.props
    return (
      <header>
        <TodoTextInput
          newTodo
          onSave={::this.handleSave}
          placeholder="Type a new task and press [ENTER]" />
      </header>
    )
  }
}

export default Header
