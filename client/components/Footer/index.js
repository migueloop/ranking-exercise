
import React, { Component } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters'
import classnames from 'classnames'
import style from './style.css'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'To do',
  [SHOW_COMPLETED]: 'Done'
}

class Footer extends Component {
  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = this.props

    return (
      <a className={classnames({ [style.selected]: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {title}
      </a>
    )
  }



  render() {
    return (
      <footer className={style.normal}>
        <ul className={style.filters}>
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
      </footer>
    )
  }
}

export default Footer
