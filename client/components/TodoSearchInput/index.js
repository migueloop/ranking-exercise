
import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'

class TodoSearchInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchText: '',
      showInputSearch: false
    };
  }

  handleSubmit(e) {
    const searchText = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSearch(searchText);
      this.setState({ searchText: searchText });
    }
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value })
  }

  handleShowInputSearch(e){
    e.preventDefault();
    if(this.state.showInputSearch){
       this.setState({ searchText: '' });
       this.props.onSearch(this.state.searchText);
    }
    this.setState({
      showInputSearch: !this.state.showInputSearch
    })
  }

  renderSearchOrCloseIcon(){
   return !this.state.showInputSearch ? (<span className="fa fa-search"></span>) : (<span className="fa fa-times-circle"></span>)
  }

  render() {
    return (
      <div className={style.searchBar}>
        <button className={style.searchButton} type="button" onClick={::this.handleShowInputSearch}>
            {this.renderSearchOrCloseIcon()}
        </button>
        <div className={this.state.showInputSearch ? style.hide : style.show}>
          <strong className={style.todoTitle}> The todo-list exersise </strong>
        </div>
        <div className={this.state.showInputSearch ? style.show : style.hide}>
          <input className={style.searchInput}
            type="text"
            autoFocus="true"
            placeholder={this.props.placeholder}
            ref={this.props.searchText}
            value={this.state.searchText}
            onKeyDown={::this.handleSubmit}
            onChange={::this.handleChange}
            />
        </div>
      </div>
    )
  }
}

export default TodoSearchInput
