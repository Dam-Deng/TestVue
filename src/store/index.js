import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-type'

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
    [types.ADD_TODO] (state, todo) {
      if (todo.length > 0) {
        let todos = state.todos
        todos.push({text: todo})
        state.todos = _.uniqBy(todos, 'text')
      }
    },
    [types.REMOVE_TODO] (state, index) {
      state.todos.splice(index, 1)
    },
    [types.SHUFFLE_TODO] (state) {
      state.todos = _.shuffle(state.todos)
    }
  },
  actions: {
    shuffleTodoAsync (context) {
      setTimeout(() => {
        context.commit(types.SHUFFLE_TODO)
        console.log('sleep 2s')
      }, 2000)
    }
  }
})

export default store
