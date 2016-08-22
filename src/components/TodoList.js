import React, { Component } from 'react'
import ListItem from './ListItem'
import TodoStore from '../stores/TodoStore'
import TodoActions from '../actions/TodoActions'

export default class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: TodoStore.getAll()
    }

    this._onChange = this._onChange.bind(this);
    this.getStocks = this.getStocks.bind(this);
  }

  componentDidMount() {
    TodoActions.getAllTodos();
    TodoStore.startListening(this._onChange);
    TodoStore.on("NewStock", this.getStocks)
  }

  componentWillUnmount() {
    TodoStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  getStocks(){
    this.setState({
      stocks: TodoStore.getStocks()
    })
    console.log("TodoStore.getStocks:", TodoStore.getStocks())
  }

  render() {
    let ListItems = [];

      if(this.state.stocks) {

         ListItems = this.state.stocks.map(stock => {
          return (

            <ListItem {...stock}/>
          )
        })
      }
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Symbol</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {ListItems}
        </tbody>
      </table>
    )
  }
}
