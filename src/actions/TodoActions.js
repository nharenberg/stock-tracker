import API from '../API'

const TodoActions = {
  getAllTodos: API.getAllTodos,
  createTodo(todo) {
    API.createTodo(todo);
  },
  searchAPI(name) {
    API.searchAPI(name)
  }
}

export default TodoActions
