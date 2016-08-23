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
    TodoStore.on("NEW_STOCK", this.getStocks);
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
    console.log("TodoStore.getStocks:", TodoStore.getStocks())
    this.setState({
      stocks: TodoStore.getStocks()
    })
  }

  render() {
    let ListItems;

      if(this.state.stocks) {

         ListItems = this.state.stocks.map((stock, index) => {
          return (

            <ListItem key={index} {...stock}/>
          )
        })
      }
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Stock Name</th>
            <th>Exchange</th>
          </tr>
        </thead>
        <tbody>
          {ListItems}
        </tbody>
      </table>
    )
  }
}
