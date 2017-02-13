import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-type'

Vue.use(Vuex)

var _ = require('lodash')
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [
      {text: 'todo1'},
      {text: 'todo2'},
      {text: 'todo3'}
    ],
    count: 10,
    time: ''
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
    },
    countDown (state, IntervalId) {
      state.count -= 1
      console.log(state.count)
      if (state.count <= 0) {
        clearInterval(IntervalId)
        console.log('STOP INTERVAL!')
      }
    }
  },
  actions: {
    shuffleTodoAsync (context) {
      setTimeout(() => {
        context.commit(types.SHUFFLE_TODO)
        console.log('sleep 2s')
      }, 500)
    },
    cycleCountDown (context) {
      let IntervalId = setInterval(() => {
        context.commit('countDown', IntervalId)
      }, 1000)
    }
  }
})

export default store
