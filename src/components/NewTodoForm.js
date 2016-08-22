import React, { Component } from 'react'
import TodoActions from '../actions/TodoActions'
import ServerActions from '../actions/ServerActions'
import TodoStore from "../stores/TodoStore"


export default class NewTodoForm extends Component {
  constructor() {
    super();

    this.state = {
      task: ''
    }
    this.changeTaskInput = this.changeTaskInput.bind(this);
    this.submit = this.submit.bind(this);
    //this.getStocks = this.getStocks.bind(this);
  }

  changeTaskInput(e) {
    let task = e.target.value;
    this.setState({ task })
  }

  submit(e) {
    e.preventDefault();
    let { task } = this.state;
    TodoActions.searchAPI(this.state.task)

    TodoActions.createTodo({ task });
    this.setState({task: ''});
  }


  render() {
    let { task } = this.state;

    return (
      <div>
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label>Enter New Stock:</label>
            <input type="text"
                   className="form-control"
                   placeholder="Enter Stock Symbol"
                   value={task}
                   onChange={this.changeTaskInput}/>
          </div>

          <button type="submit" className="btn btn-default">Check Stocks</button>
        </form>
      </div>
    )
  }
}