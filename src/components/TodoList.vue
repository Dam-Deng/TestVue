<template>
  <section>
    <input type="text" v-model.trim="newTodo" v-on:keyup.enter="addTodo" placeholder="Add Todo Item"/>
    <button @click="shuffleTodoAsync">打乱</button>
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
  import {mapMutations, mapActions} from 'vuex'
  import store from '../store/index.js'
  import types from '../store/mutation-type.js'

  export default {
    name: 'TodoList',
    components: {
      ListItem
    },
    data () {
      return {
        newTodo: ''
      }
    },
    created: function () {
      store.dispatch('cycleCountDown')
    },
    computed: {
      todos () {
        return store.state.todos
      }
    },
    methods: {
      ...mapMutations({
        'removeTodo': types.REMOVE_TODO,
        'shuffleTodo': types.SHUFFLE_TODO
      }),
      ...mapActions([
        'shuffleTodoAsync'
      ]),
      addTodo () {
        store.commit(types.ADD_TODO, this.newTodo)
        this.newTodo = ''
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
