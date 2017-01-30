<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-show="seen" class="red" v-bind:class="{ active : isActive }">{{ message|uppercase }}</h1>
    <h1 v-if="seen">{{ reversedMessage }}</h1>
    <h1 v-else>{{ message }}</h1>
    <a v-bind:href="url">BAIDU</a>
    <button v-on:click="reverseMessageFun">翻转</button>
    <section>
      <input type="text" v-model="newTodo" v-on:keyup.enter="addTodo" placeholder="Add Todo Item"/>
      <ul>
        <List v-for="(todo, index) in todos" v-bind:todo="todo" v-on:remove="removeTodo(index)"></List>
      </ul>
    </section>
    <hello></hello>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import List from './components/List'

  export default {
    name: 'app',
    components: {
      Hello,
      List
    },
    data () {
      return {
        seen: true,
        isActive: true,
        hasError: true,
        message: 'TIME: ' + (new Date()),
        newTodo: '',
        todos: [
          'todo1',
          'todo2',
          'todo3'
        ],
        url: '//www.baidu.com'
      }
    },
    computed: {
      reversedMessage: function () {
        return this.message.split('').reverse().join('')
      }
    },
    methods: {
      addTodo: function () {
        let todo = this.newTodo.trim()
        if (todo.length > 0) {
          this.todos.push(todo)
          this.newTodo = ''
        }
      },
      reverseMessageFun: function () {
        this.message = this.message.split('').reverse().join('')
      },
      removeTodo: function (index) {
        this.todos.splice(index, 1)
      }
    },
    filters: {
      uppercase: function (value) {
        let valueStr = value.toString()
        return valueStr.toUpperCase()
      }
    }

  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .red {
    color: #ff568f;
  }

  .active {
    text-shadow: 2px 2px 8px;
  }

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
