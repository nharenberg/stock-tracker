import API from '../API'

const TodoActions = {
  getAllTodos: API.getAllTodos,
  createTodo(todo) {
    API.createTodo(todo);
  },
  searchAPI(name) {
    API.searchAPI(name)
  },
  getQuote(name) {
    console.log("another something")
    API.getQuote(name)
  }
}

export default TodoActions
