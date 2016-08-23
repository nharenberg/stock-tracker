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
  },
  findQuote(data) {
    AppDispatcher.dispatch({
    type: 'FOUND_ONE_QUOTE',
    data
    })
  }
}
export default ServerActions