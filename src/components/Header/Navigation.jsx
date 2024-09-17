import React, { Component } from 'react'
import './Navigation.css'
export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
            <li><a className="active" href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Contact</a></li>
        </ul>
      </nav>
    )
  }
}
