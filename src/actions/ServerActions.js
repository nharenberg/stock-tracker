import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveTodos(todos) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_TODOS',
      todos
    })
  },
  receiveOneTodo(todo) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_TODO',
      todo
    })
  },
  findStock(data) {
    AppDispatcher.dispatch({
      type: "FIND_ONE_STOCK",
      data
    })
  }
}

export default ServerActions