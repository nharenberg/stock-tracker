import React, { Component } from 'react';
import OneStock from "./OneStock"
import TodoActions from "../actions/TodoActions"
import { Link, browserHistory } from "react-router"

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.navigateToOneStock = this.navigateToOneStock.bind(this)
  }

  navigateToOneStock(Symbol) {
    TodoActions.getQuote(Symbol)
   browserHistory.push(`/oneStock/${Symbol}`)
  }

  render() {
    console.log("this.props:",this.props)
    const { Symbol, Name, Exchange } = this.props
    return (
      <tr onClick={() => this.navigateToOneStock(Symbol)}>
        <td>{ Symbol }</td>
        <td>{ Name }</td>
        <td>{ Exchange }</td>
      </tr>
  )
  }
}