import React, { Component } from 'react';
import moment from 'moment'

export default class ListItem extends Component {
  constructor() {
    super();
  }

  render() {
    let { _id, task, createdAt, isComplete } = this.props;

    return (
      <tr>
        <td>{ task }</td>
        <td></td>
        <td></td>
      </tr>
    )    
  }
}