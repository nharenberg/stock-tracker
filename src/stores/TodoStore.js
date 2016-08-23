import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import uuid from 'uuid';

let _todos = [];
let _stock;
let _quote;

class TodoStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_TODOS':
          _todos = action.todos;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_TODO':
          var { todo } = action;
          _todos.push(todo);
          this.emit('CHANGE');
          break;
        case 'CREATE_TODO':
          var { todo } = action;

          todo._id = uuid();
          todo.createdAt = Date.now();
          todo.isComplete = false;

          _todos.push(todo);
          this.emit('CHANGE');
          break;
          case "FIND_ONE_STOCK":
            _stock = action.data;
          this.emit('NEW_STOCK');
          break;
          case "FOUND_ONE_QUOTE":
            _quote = action.data;
            this.emit("NEW_QUOTE");
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _todos;
  }
  getStocks() {
    return _stock;
  }
  getOneQuote() {
    return _quote;
  }
}

export default new TodoStore();
