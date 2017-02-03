import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var _ = require('lodash')
const store = new Vuex.Store({
  state: {
    todos: [
      {text: 'todo1'},
      {text: 'todo2'},
      {text: 'todo3'}
    ]
  },
  mutations: {
    addTodo (state, todo) {
      if (todo.length > 0) {
        let todos = state.todos
        todos.push({text: todo})
        state.todos = _.uniqBy(todos, 'text')
      }
    },
    removeTodo (state, index) {
      state.todos.splice(index, 1)
    },
    shuffleTodo (state) {
      state.todos = _.shuffle(state.todos)
    }
  },
  actions: {
    shuffleTodoAsync (context) {
      setTimeout(() => {
        context.commit('shuffleTodo')
        console.log('sleep 2s')
      }, 2000)
    }
  }
})

export default store
