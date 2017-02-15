
import React, { Component } from 'react'
import TodoItem from '../TodoItem'
import Footer from '../Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, SEARCH_TODO } from '../../constants/filters'
import style from './style.css'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed,
}

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { filter: SHOW_ALL}
  }

  handleClearCompleted() {
    const atLeastOneCompleted = this.props.todos.some(todo => todo.completed)
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted()
    }
  }

  handleShow(filter) {
    this.setState({ filter })
  }

  renderFooter() {
    const { todos } = this.props
    const { filter } = this.state

    if (todos.length) {
      return (
        <Footer
          filter={filter}
          onClearCompleted={::this.handleClearCompleted}
          onShow={::this.handleShow} />
      )
    }
  }

  render() {
    const { todos, actions, searchText} = this.props
    const { filter } = this.state
    let filteredTodos = todos.filter(TODO_FILTERS[filter])
    if(searchText && searchText != ''){
      filteredTodos = filteredTodos.filter( (todo) => (todo.text.toLowerCase().indexOf(searchText) != -1))
    }
    return (
      <div>
        <section className={style.main}>
          <ul className={style.normal}>
            {filteredTodos.map(todo =>
              <TodoItem key={todo.id} todo={todo} {...actions} />
            )}
          </ul>
        </section>
        <section>
          {this.renderFooter()}
       </section>
      </div>
    )
  }
}

export default MainSection
