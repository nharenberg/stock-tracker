import axios from 'axios'
import ServerActions from './actions/ServerActions'
import { getJSON } from "jquery"
import jsonp from "jsonp"

const API = {
  getAllTodos() {
    axios.get('/api/todos')
      .then(res => res.data)
      .then(ServerActions.receiveTodos)
      .catch(console.error);
  },
  createTodo(todo) {
    axios.post('/api/todos', todo)
      .then(res => res.data)
      .then(ServerActions.receiveOneTodo)
      .catch(console.error);
  },
  searchAPI(symbol){
    let url = `http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${symbol}`
      jsonp(url, function (err, data) {
        //console.log("data:", data)
      ServerActions.findStock(data)
    })
  },
  getQuote(symbol){
    console.log("something")
    let url = `http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=${symbol}`
      jsonp(url, function (err, data) {
        console.log("data:", data)
        ServerActions.findQuote(data)
      })
  }
}

export default API;