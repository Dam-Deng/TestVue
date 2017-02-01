<template>
  <section>
    <input type="text" v-model.trim="newTodo" v-on:keyup.enter="addTodo" placeholder="Add Todo Item"/>
    <button @click="shuffleTodo">打乱</button>
    <transition-group name="fade" tag="ul">
      <ListItem v-for="(todo, index) in todos"
                :key="todo.text"
                :todo="todo"
                @remove="removeTodo(index)"></ListItem>
    </transition-group>
  </section>
</template>

<script>
  import ListItem from './ListItem'

  var _ = require('lodash')

  export default {
    name: 'TodoList',
    components: {
      ListItem
    },
    data () {
      return {
        newTodo: '',
        todos: [
          {text: 'todo1'},
          {text: 'todo2'},
          {text: 'todo3'}
        ]
      }
    },
    methods: {
      addTodo: function () {
        let todo = this.newTodo.trim()
        if (todo.length > 0) {
          this.todos.push({text: todo})
          this.todos = _.uniqBy(this.todos, 'text')
          this.newTodo = ''
        }
      },
      removeTodo: function (index) {
        this.todos.splice(index, 1)
      },
      shuffleTodo: function () {
        this.todos = _.shuffle(this.todos)
      }
    }
  }
</script>

<style>

  ul {
    display: inline-block;
    width: 100%;
    max-width: 500px;
  }

  li {
    text-align: left;
  }

  input {
    width: 80%;
    max-width: 768px;
  }
</style>
