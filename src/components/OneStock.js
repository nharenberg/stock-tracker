import React, { Component } from 'react';

export default class OneStock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("this.props:",this.props)
    const { Symbol, Name, Exchange } = this.props
    return (
      <tr>
        <td>{ Symbol }</td>
        <td>{ Name }</td>
        <td>{ Exchange }</td>
      </tr>
    )    
  }
}