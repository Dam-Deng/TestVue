<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-show="seen" class="red" v-bind:class="{ active : isActive }">{{ message|uppercase }}</h1>
    <h1 v-if="seen">{{ reversedMessage }}</h1>
    <h1 v-else>{{ message }}</h1>
    <router-link :to="url.homeUrl">HOME</router-link>
    <router-link :to="url.todoListUrl">TodoList</router-link>
    <button v-on:click="reverseMessageFun">翻转</button>

    <transition name="fade">
      <router-view>
        <h3>Simple Slot</h3>
        <p slot="p-slot">P Slot</p>
      </router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
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

<style>
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


  .fade-enter-active {
    transition: opacity .5s
  }

  .fade-leave-active {
    transition: opacity .2s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .fade-move {
    transition: transform 1s;
  }
</style>
