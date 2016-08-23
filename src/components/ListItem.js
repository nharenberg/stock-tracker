import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("this.props:",this.props)
    const { Symbol, Name, Exchange } = this.props
    return (
      <tr onClick={() => console.log("hello from the tr")}>
        <td>{ Symbol }</td>
        <td>{ Name }</td>
        <td>{ Exchange }</td>
      </tr>
    )
  }
}