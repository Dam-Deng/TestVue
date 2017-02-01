<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-show="seen" class="red" v-bind:class="{ active : isActive }">{{ message|uppercase }}</h1>
    <h1 v-if="seen">{{ reversedMessage }}</h1>
    <h1 v-else>{{ message }}</h1>
    <a :href="url.homeUrl">HOME</a>
    <a :href="url.todoListUrl">TodoList</a>
    <button v-on:click="reverseMessageFun">翻转</button>
    <component v-bind:is="ViewComponent"></component>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import TodoList from './components/TodoList'

  const NotFound = {template: '<p>Page not found</p>'}
  const routes = {
    '/': Hello,
    '/todo-list': TodoList
  }

  export default {
    name: 'app',
    components: {
      Hello,
      TodoList
    },
    data () {
      return {
        seen: true,
        isActive: true,
        hasError: true,
        message: 'TIME: ' + (new Date()),
        currentRoute: window.location.pathname,
        url: {
          homeUrl: '/',
          todoListUrl: '/todo-list'
        }
      }
    },
    computed: {
      reversedMessage: function () {
        return this.message.split('').reverse().join('')
      },
      ViewComponent () {
        return routes[this.currentRoute] || NotFound
      }
    },
    methods: {
      reverseMessageFun: function () {
        this.message = this.message.split('').reverse().join('')
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

</style>
