
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoSearchInput from '../../components/TodoSearchInput'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as TodoActions from '../../actions/todos'
import style from './style.css'

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {searchText : ''}
  }

  handleSearch(searchedText){
    this.setState({searchText: this.searchText.value})
  }

  render() {
    const { todos, actions, children} = this.props
    return (
      <div className={style.normal}>
        <TodoSearchInput
          ref={this.searchText}
          searchText={(input) => this.searchText = input}
          onSearch={(searchText) => ::this.handleSearch(searchText)}
          placeholder="Type text and press [ENTER]"
        />
        <Header  actions={actions}/>
        <MainSection
          inputRef={(input) => this.searchText = input}
          todos={todos}
          actions={actions}
          searchText={this.state.searchText}/>
        {children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    searchText: state.searchText
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
