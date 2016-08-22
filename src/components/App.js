import React, { Component } from 'react';
import TodoList from './TodoList'
import NewTodoForm from './NewTodoForm'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className="text-center">Stock Tracker!</h1>
        <NewTodoForm />
        <TodoList />
      </div>
    )
  }
}
